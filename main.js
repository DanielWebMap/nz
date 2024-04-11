let lat = -34.426769;
let lng = 172.67751;
let zoom = 15;

let map = L.map('map').setView([lat, lng], zoom);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.circleMarker([-34.426769, 172.67751], { color: '#252850', fillColor: '#fef5d4', fillOpacity: '0.6' }).addTo(map);
marker.bindPopup(`
    <b>Cape Reinga</b><br>Nördlichster Punkt von Neuseeland 
    <ul>
        <li><b>Breite: ${lat}</b></li>
        <li><b>Länge: ${lng}</b></li>
    </ul>
`).openPopup();



