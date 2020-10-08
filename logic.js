
mapboxgl.accessToken = 'pk.eyJ1IjoiZHJvcC1nIiwiYSI6ImNrZnd3OTd6azFvMWkydG10aGN2Z2Q2MnUifQ.EOjRwzS_WYEK5wOfXc32sQ';
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

    var marker = new mapboxgl.Marker()
.setLngLat([lat, long])
.addTo(map);
    




