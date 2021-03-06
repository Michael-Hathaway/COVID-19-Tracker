import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import MapPopup from './MapPopup';
import '../style/Map.css';

const Map = ({ countries, mapCenter, mapZoom }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    map?.setView(mapCenter, mapZoom);
  }, [mapCenter, mapZoom, map]);

  const renderDataOnMap = () => {
    return countries.map((country, index) => {
      return (
        <Circle
          key={index}
          center={{
            lat: country.countryInfo.lat,
            lng: country.countryInfo.long,
          }}
          fillOpacity={0.4}
          fillColor="rgba(204, 16, 52, 0.5)"
          color="#CC1034"
          radius={Math.sqrt(country.cases) * 250}
        >
          <MapPopup country={country} />
        </Circle>
      );
    });
  };

  return (
    <div className="map">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        scrollWheelZoom={false}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countries && renderDataOnMap()}
      </MapContainer>
    </div>
  );
};

export default React.memo(Map);
