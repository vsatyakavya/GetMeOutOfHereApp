$(document).ready(function(){
  $('.dropdown-trigger').dropdown();
});
$(document).ready(function(){
  $('.dropdown-trigger').dropdown();
  $('select').formSelect();
  $('.carousel').carousel();
    

// mapboxgl.accessToken = 'pk.eyJ1IjoiZHJvcC1nIiwiYSI6ImNrZnd3OTd6azFvMWkydG10aGN2Z2Q2MnUifQ.EOjRwzS_WYEK5wOfXc32sQ';
//   var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11'
//   });

  if (navigator.geolocation)
  {
      navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  }
  else 
  {
      alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
  }       
});

function successFunction(position) 
{
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  alert('Your latitude is :'+lat+' and longitude is '+long);
}

function errorFunction(position) 
{
  alert('Error!');
}
var queryURL="https://api.mapbox.com/geocoding/v5/mapbox.places/30.473656599999998,-97.65708339999999.json?access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"
$.ajax({
  url:queryURL,
  method:"GET"
}).then(function(response){
  console.log(response);
})

  var queryURL="https://api.mapbox.com/geocoding/v5/mapbox.places/roundrock.json?access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"

$.ajax({
    url:queryURL,
    method:"GET"
}).then(function(response){
    console.log(response);
})

var queryURL="https://api.mapbox.com/geocoding/v5/mapbox.places/theme%20park.json?bbox=-98.0261770004211,30.0678640288457,-97.5416001207618,30.5194859159522&access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"

$.ajax({
    url:queryURL,
    method:"GET"
}).then(function(response){
    console.log(response);
})

var queryURL="https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic2F0eWFrYXZ5YSIsImEiOiJja2Z3dzlqMHQxbms4MnFtdHU2anRzdXJ1In0.6_LfOlTLPu9B8frAVcNLqA"
$.ajax({
    url:queryURL,
    method:"GET"
}).then(function(response){
    console.log(response);
})



 
