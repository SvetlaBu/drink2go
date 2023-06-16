/* в этот файл добавляет скрипты*/
 // Creating map options
 var mapOptions = {
  center: [59.968137, 30.316272],
  zoom: 35
}
// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

// Icon options
var iconOptions = {
  iconUrl: 'img/map/pin.png',
  iconSize: [40, 50]
}
// Creating a custom icon
var customIcon = L.icon(iconOptions);

// Creating Marker Options
var markerOptions = {
  title: "Location",
  clickable: true,
  draggable: true,
  icon: customIcon
}
// Creating a Marker
var marker = L.marker([59.968137, 30.316272], markerOptions);

// Adding popup to the marker
marker.bindPopup('Энергия аккумулируется здесь').openPopup();

// Adding marker to the map
marker.addTo(map);
