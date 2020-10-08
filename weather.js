function getWeather() {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");
    let API = "381913a298d3365457e6e5d4fdf83c2c";

    location.innerHTML = "Locating...";

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        console.log(position);
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        let url = "https://api.openweathermap.org/data/2.5/weather" + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + API + "&units=imperial";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let temp = data.main.temp;
                temperature.innerHTML = temp + "° F";
                location.innerHTML =
                    data.name + " (" + latitude + "°, " + longitude + "°)";
                description.innerHTML = data.weather[0].main;
            });
    }

    function error() {
        console.log("error");
        location.innerHTML = "Unable to retrieve your location, Check browser"
    }
}

getWeather();   
