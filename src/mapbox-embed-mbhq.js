document.addEventListener('DOMContentLoaded', () => {
    const showMapMarker = true;  // Set this to false to hide marker
    const showMapPopup = false;   // Set this to false to hide popup

    // Replace with your Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFubWFrZWJ1aWxkIiwiYSI6ImNtOGh2Z2x3MjA1cG8yanNiemF6MGU2djkifQ.U1IxbNCPaan2A2U2qOHF1g';

    // Somerset House coordinates
    const somersetHouseCoordinates = [-0.1172, 51.5111];

    // Initialize the map
    const map = new mapboxgl.Map({
        container: 'page-hero_map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: somersetHouseCoordinates,
        zoom: 12,
        maxZoom: 12,
        minZoom: 4,          // Add minimum zoom level to prevent zooming out too far
        dragPan: false,         // Keep this false to prevent dragging
        dragRotate: false,      // Keep this false to prevent rotation
        touchZoomRotate: false, // Disable touch zoom and rotate completely
        scrollZoom: {           // Configure scroll zoom to stay centered
            around: 'center'
        },
        interactive: true      // Disable all map interactions
    });

    // Remove navigation controls since the map is not interactive
    // map.addControl(new mapboxgl.NavigationControl());

    // Create custom marker element
    const markerElement = document.createElement('div');
    markerElement.className = 'map_custom-marker';
    markerElement.innerHTML = `
        <img src="https://cdn.prod.website-files.com/65c3b77e44404ee1185739e1/66243d428f7618ae29e8888f_Group%201000004323.svg" alt="MakeBuild" width="80" height="80">
    `;

    // Create a marker at Somerset House with custom element
    const popupContent = document.querySelector('.page-hero_map_marker').innerHTML;
    const marker = new mapboxgl.Marker(markerElement)
        .setLngLat(somersetHouseCoordinates)
        .setPopup(new mapboxgl.Popup().setHTML(popupContent))
        .addTo(map);
        
    // Show/hide marker based on variable
    if (!showMapMarker) marker.remove();
    
    // Show/hide popup based on variable
    if (showMapPopup) marker.togglePopup();
});