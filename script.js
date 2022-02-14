var map = L.map('mapid').setView([40,-75], 13);
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 10,
	ext: 'png'
}).addTo(map);

var marker1 = L.marker([40, -75]).addTo(map)
var marker2 = L.marker([40, -75.5]).addTo(map)
var marker3 = L.marker([40, -75.3]).addTo(map)

var circle = L.circle([40, -75.2], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.9,
    radius: 5000
}).addTo(map);

var polygon = L.polygon([
    [40, -75],
    [40.2, -75.1],
    [40.2, -75.2]
],{color:'blue',
   fillColor:'red'}).addTo(map);

marker1.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
marker2.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
marker3.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

/* this is comment 
var popup = L.popup()
    .setLatLng([40, -75])
    .setContent("I am a standalone popup.")
    .openOn(map);
*/

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
