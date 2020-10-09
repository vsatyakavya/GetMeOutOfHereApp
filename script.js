$(document).ready(function(){
  var array=[];
  var result = localStorage.getItem("saved-locations");
  if(result){
    array = JSON.parse(result);
  }

  for (var i = 0; i < array.length; i++) {
      var placeName = array[i];
      
      var name = $("<p>");
    
      name.text(placeName);

      var card = $("<div class='card'></div>");
      var cardBody = $("<div class='card-content'>");
  
      card.attr("style", "background-color: #558b2f; color:white; cursor: pointer; text-align: center;");
      card.append(cardBody);
      cardBody.append(name);
  
      $("#saved-section").append(card);
    }
});