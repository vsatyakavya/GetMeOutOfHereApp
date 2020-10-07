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
// Want map to grab a list of 10 features from the user's location parameters (userdropdown menu mileage)
// When one of those features is clicked, new page opens with that feature's info
// Maybe also include a dropdown menu so they can choose how many features they want to see (10, 50, etc.) ?