
$(document).ready(function () {
   var place="";
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
      

      mapboxgl.accessToken = 'pk.eyJ1IjoiZHJvcC1nIiwiYSI6ImNrZnd3OTd6azFvMWkydG10aGN2Z2Q2MnUifQ.EOjRwzS_WYEK5wOfXc32sQ';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [long, lat],
        zoom: 9
      });


      var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + place + ".json?proximity=" + long + "," + lat + "&autocomplete=false&access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        $("#poi-section").empty();

        for (var i = 0; i < 5; i++) {
          var placeName= response.features[i].place_name;
          var name = $("<p>");
          name.addClass("selectedplace");
          name.attr("place-name", place);
          name.text(placeName);

          if (placeName) {
            $("#poi-section").append(name);
          }
         
      
          
        }
        
      })
      // var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/dog%20park.json?proximity=" + long + "," + lat + "&autocomplete=false&types=poi&access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"

      // $.ajax({
      //   url: queryURL,
      //   method: "GET"
      // }).then(function (response) {
      //   console.log(response);
      // })

      // var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/beach.json?proximity=" + long + "," + lat + "&autocomplete=false&access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"

      // $.ajax({
      //   url: queryURL,
      //   method: "GET"
      // }).then(function (response) {
      //   console.log(response);
      // })


    }
  }


});


