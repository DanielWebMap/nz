var map = L.map('map').setView([63.5321038, -19.511292], 15);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);


        var marker = L.circleMarker([63.5321038, -19.511292], {color: '#252850', fillColor: '#38caff', fillOpacity: '0.6'}).addTo(map);
        marker.bindPopup("<b>Skógafoss</b> <br> GPS: 63.532104 -19.511292 ").openPopup();
