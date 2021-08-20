/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWtzaGF5c2gwNyIsImEiOiJja3M4MXVncjIwcmY3MzBvY3NhZWYzcTY0In0.JvMxizrVwtvXbpBL3KvJug';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/akshaysh07/cks82hdss3t3z17n3jfp8h42g',
    scrollZoom: false,
    //   center: [-118.113491, 34.111745],
    //   zoom: 4,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
