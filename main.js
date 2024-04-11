let lat = -34.426769;
let lng = 172.67751;
let zoom = 15;

let map = L.map('map', {   //Objekt Map der Klasse Leaflet, Bezeichnung 'map' als ID für Referenz
    center: [lat, lng],  //Key: Wert [Array]
    zoom: zoom
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.circleMarker([-34.426769, 172.67751], { color: '#252850', fillColor: '#fef5d4', fillOpacity: '0.6' }).addTo(map);
marker.bindPopup(`
    <b>Cape Reinga</b><br>Nördlichster Punkt von Neuseeland 
    <ul>
        <li><b>Breite: ${lat.toFixed(5)}</b></li>
        <li><b>Länge: ${lng.toFixed(5)}</b></li>
    </ul>
`).openPopup();

L.control.scale({     //Maßstab wird hinzugefügt
    imperial:false,   //Nur Metrische Skala soll angezeigt werden
    maxWidth: 150     //Länge des Maßstabes
}).addTo(map);



