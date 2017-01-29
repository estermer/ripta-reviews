
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

var stop1 = {lat: 41.837486, lng: -71.423175};
  var stop2 = {lat: 41.837280, lng: -71.421865};
  var stop3 = {lat: 41.837063, lng: -71.421490}; //coordinates where we want the marker

var marker = new google.maps.Marker({
    position: stop1,//pace the marker on this position
    icon: "img/bluepin.png",
    map: map //place it on this map instance
  });
  var marker = new google.maps.Marker({
    position: stop2,//pace the marker on this position
    icon: "img/bluepin.png",    
    map: map //place it on this map instance
  });
  var marker = new google.maps.Marker({
    position: stop3,//pace the marker on this position
    icon: "img/bluepin.png",
    map: map //place it on this map instance
  });

}
///Creating a map from google maps///
