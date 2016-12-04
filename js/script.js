/********HACK RI********/
///**TEAM BLACKBERRY**///
/***********************/
window.pos;
window.onload = loadMap;
function loadMap(){
  console.log("loading map...");
  ///Creating a map from google maps///
  //initMap(41.8384, -71.4221);
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(position) {
    window.pos = position;
    crd = position.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    initMap(crd.latitude, crd.longitude);
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  if(window.pos == undefined){
    navigator.geolocation.getCurrentPosition(success, error, options);
  } else {
    success(window.pos);
  }
}
