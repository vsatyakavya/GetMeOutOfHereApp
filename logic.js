
$(document).ready(function () {
  $('.dropdown-trigger').dropdown();
  $('select').formSelect();
  $('.carousel').carousel();


  // mapboxgl.accessToken = 'pk.eyJ1IjoiZHJvcC1nIiwiYSI6ImNrZnd3OTd6azFvMWkydG10aGN2Z2Q2MnUifQ.EOjRwzS_WYEK5wOfXc32sQ';
  //   var map = new mapboxgl.Map({
  //     container: 'map',
  //     style: 'mapbox://styles/mapbox/streets-v11'
  //   });

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



    var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/theme%20park.json?proximity=" + long + "," + lat + "&access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    })

    var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/lake.json?proximity=" + long + "," + lat + "&autocomplete=false&access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    })
    var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/dog%20park.json?proximity=" + long + "," + lat + "&autocomplete=false&types=poi&access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    })

    var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/beach.json?proximity=" + long + "," + lat + "&autocomplete=false&access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    })

    var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/campground.json?proximity=" + long + "," + lat + "&autocomplete=false&access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    })

    var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/zoo.json?proximity=" + long + "," + lat + "&autocomplete=false&access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    })
    var queryURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/pool.json?proximity=" + long + "," + lat + "&autocomplete=false&access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    })

  }
});




