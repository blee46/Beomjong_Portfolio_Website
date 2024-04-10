function init() {
  var e1 = document.getElementById('canvas');
  var myLocation= new google.maps.LatLng(-25.363882,131.044922);

  var mapOptions = {
    zoom: 4,
    center: myLocation
  }

  var map = new google.maps.Map(e1, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: map,
  });

  var contentString = '<h1>My Location</h1><p>Hello World!</p>';

  var infoWindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map, marker);
  });
};