$(document).ready(function () {
  $(document).ready(function () {
    $('.dropdown-trigger').dropdown();
  });
  var array=[];
  var result = localStorage.getItem("saved-locations");
  if(result){
    array = JSON.parse(result);
  }
  var place = "";
  $("#lake").on("click", function (event) {
    event.preventDefault();
    place = $("#lake").attr("id");
    getData(place);
  })
  $("#beach").on("click", function (event) {
    event.preventDefault();

    place = $("#beach").attr("id");
    getData(place);
  })
  $("#zoo").on("click", function (event) {
    event.preventDefault();

    place = $("#zoo").attr("id");
    getData(place);
  })
  $("#pool").on("click", function (event) {
    event.preventDefault();

    place = $("#pool").attr("id");
    getData(place);
  })
  $("#campgrounds").on("click", function (event) {
    event.preventDefault();
    place = $("#campgrounds").attr("id");
    getData(place);
  })


  function getData(place) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    }
    else {
      alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
    }


    function errorFunction(position) {
      alert('Error!');
    }

    function successFunction(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      $(".card-image").css("display", "none");
      $(".card-content").css("display", "none");




      mapboxgl.accessToken = 'pk.eyJ1IjoiZHJvcC1nIiwiYSI6ImNrZnd3OTd6azFvMWkydG10aGN2Z2Q2MnUifQ.EOjRwzS_WYEK5wOfXc32sQ';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [long, lat],
        zoom: 9
      });

      var marker = new mapboxgl.Marker()
        .setLngLat([long, lat])
        .addTo(map);



      var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + place + ".json?proximity=" + long + "," + lat + "&autocomplete=false&access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        $("#poi-section").empty();

        for (var i = 0; i < 5; i++) {
          var placeName = response.features[i].place_name;
          var longitude = response.features[i].center[0];
          var latitude = response.features[i].center[1];
          var name = $("<p>");
          name.addClass("selectedplace");
          name.attr("place-name", place + i);
          name.attr("longitude", longitude);
          name.attr("latitude", latitude);
          name.text(placeName);
          var marker = new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
             .addTo(map);
           console.log(this)
           console.log(marker);


          var card = $("<div class='card'></div>");
          var cardBody = $("<div class='card-content'>");
          var cardContent = $("<p>");
          cardContent.attr("style", "color:white").text("Click To See Weather For This Location!");
          card.attr("style", "background-color: #558b2f; color:white; cursor: pointer; text-align: center;");
          card.append(cardBody);
          cardBody.append(name);
          cardBody.append(cardContent)
          var button = $("<button>");

          button.addClass("add-button");
          button.attr("id", i);

          button.text("save");
          cardBody.append(button);

          $("#poi-section").append(card);



        }

        $(".selectedplace").on("click", function (event) {
          var weatherLong = $(this).attr("longitude");
          var weatherLat = $(this).attr("latitude");
          var API = "381913a298d3365457e6e5d4fdf83c2c";
          var queryUrl = "https://api.openweathermap.org/data/2.5/weather" + "?lat=" + weatherLat + "&lon=" + weatherLong + "&appid=" + API + "&units=imperial";
          $.ajax({
            url: queryUrl,
            method: "GET"
          }).then(function (response) {

            $("#selected-details").empty();
            var humidity = response.main.humidity;
            var temperature = response.main.temp;
            var description = response.weather[0].main;
            var date = response.dt;
            var formattedDate = Unix_timestamp(date);

            var icon = response.weather[0].icon;

            map.flyTo({
              center: [
                weatherLong ,weatherLat
                
              ],
              zoom:14,
              essential: true // this animation is considered essential with respect to prefers-reduced-motion
              });
            var card = $("<div class='card'></div>");
            var cardBody = $("<div class='card-content'>");
            card.attr("style", "background-color: #558b2f; color: white; cursor: pointer; text-align: center;");

            card.append(cardBody);
            var temp = $("<p>");
            temp.text("Temperature: " + temperature);
            var humid = $("<p>");
            humid.text("Humidity: " + humidity);
            var descr = $("<p>");
            descr.text("Description:" + description);
            var dat = $("<p>");
            dat.text("Date: " + formattedDate);
            cardBody.append(temp, humid, descr, dat);
            $("#selected-details").append(card);


          });


        });
        
        $(".add-button").on("click", function () {
          var id = $(this).attr("id");
          console.log("this is id:" + id);
          var placeName = ($(this).siblings("p.selectedplace").text());
          array.push(placeName);
          localStorage.setItem("saved-locations", JSON.stringify(array));

          console.log(placeName);




        })
      });
        function Unix_timestamp(t) {
          var dt = new Date(t * 1000);
          var date = dt.getDate();
          var month = (dt.getMonth() + 1);
          var year = dt.getFullYear();
          return month + '/' + date + '/' + year;
        }


      }
    }


  });

