//to be run in the browser not in the server-side terminal
const mapboxgl = require("mapbox-gl");
const createMarker = require("./marker");


mapboxgl.accessToken = 'pk.eyJ1IjoibW9sbHVzayIsImEiOiJjamV6dHp4ZzQwaDY3MzNvMHBwM2R6cHI3In0.0thgz1oswLnP4KbZILrBvQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

//fullstack
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);


createMarker("activities", [-74.01128768920898, 40.70927151739562]).addTo(map);