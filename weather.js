var API="381913a298d3365457e6e5d4fdf83c2c";
var weather = "";
var city = "";
var current_date = moment().format("L");
var search_history = JSON.parse(localStorage.getItem("cities")) === null ? [] : JSON.parse(localStorage.getItem("cities"));

searchHistory();
function forecast5() {
    var forecast5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&APPID=" + API;
   
    var day_counter = 1;

    $.ajax({
        url: forecast5,
        method: "GET"
    }).then(function (response) {


        for (let i = 0; i < response.list.length; i++) {
            //change each text area here
            var date_and_time = response.list[i].dt_txt;
            var date = date_and_time.split(" ")[0];
            var time = date_and_time.split(" ")[1];

            if (time === "15:00:00") {
                var year = date.split("-")[0];
                var month = date.split("-")[1];
                var day = date.split("-")[2];
                $("#day-" + day_counter).children(".card-date").text(month + "/" + day + "/" + year);
                $("#day-" + day_counter).children(".weather-icon").attr("src", "https://api.openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png");
                $("#day-" + day_counter).children(".weather-temp").text("Temp: " + ((response.list[i].main.temp - 273.15) * (9 / 5) + 32).toFixed(2) + "°F");
                $("#day-" + day_counter).children(".weather-humidity").text("Humidity: " + response.list[i].main.humidity + "%");
                day_counter++;
            }
        }
    });
}

function currentWeather() {



    if ($(this).attr("id") === "search-city") {
        city = $("#city").val();
    } else {
        city = $(this).text();
    }

    weather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + API;
    console.log(search_history.indexOf(city));

    if (search_history.indexOf(city) === -1) {

        search_history.push(city);
    }

    console.log(search_history);
    localStorage.setItem("cities", JSON.stringify(search_history));

    $.getJSON(weather, function (json) {
        var temp = (json.main.temp - 273.15) * (9 / 5) + 32;
        var windspeed = json.wind.speed * 2.237;

        $("#current-city").text(json.name + " " + current_date);
        $("#weather-img").attr("src", "https://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
        $("#temperature").text(temp.toFixed(2) + "°F");
        $("#humidity").text(json.main.humidity + "%");
        $("#windspeed").text(windspeed.toFixed(2) + " " + "mph");
    });
}