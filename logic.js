mapboxgl.accessToken = 'pk.eyJ1IjoiZWxpemFqYW5lMTMxMiIsImEiOiJja2Z3eDI2MDcxbnk3Mnh0c2VrNmk5eXRvIn0.NNut521VI5QdeK_RuDbCiA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    zoom: 4
  });
  console.log(map)
  map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
    })
    );
    var queryURL="https://api.mapbox.com/geocoding/v5/mapbox.places/theme%20park.json?bbox=-98.0261770004211,30.0678640288457,-97.5416001207618,30.5194859159522&access_token=pk.eyJ1IjoiZWxpemFqYW5lMTMxMiIsImEiOiJja2Z3eDI2MDcxbnk3Mnh0c2VrNmk5eXRvIn0.NNut521VI5QdeK_RuDbCiA";
    

$.ajax({
    url:queryURL,
    method:"GET"
}).then(function(response){
    console.log(response);
})
// Want map to grab a list of 10 features from the user's location parameters (userdropdown menu mileage)
// When one of those features is clicked, new page opens with that feature's info
// Maybe also include a dropdown menu so they can choose how many features they want to see (10, 50, etc.) ?