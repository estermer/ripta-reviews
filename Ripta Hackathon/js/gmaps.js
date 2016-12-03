//GMAPS APIKEY = AIzaSyCaZ--KZ-uQB0qKgs2W9CVfobezdchkq6k//

///Creating a map from google maps///
function initMap(lat, lng) {//pass a long and lat as parameters
  var pvd = {lat: lat, lng: lng}; //coordinates where we want the marker
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: pvd //init the map to be centered on this position
  });
  var marker = new google.maps.Marker({
    position: pvd,//pace the marker on this position
    map: map //place it on this map instance
  });
}
///Creating a map from google maps///
