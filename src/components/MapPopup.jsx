import React from 'react';
import { Popup } from 'react-leaflet';
import numeral from 'numeral';
import '../style/MapPopup.css';

const MapPopup = React.memo(({ country }) => {
  return (
    <Popup>
      <div className="popup">
        <div
          className="popup__flag"
          style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
        />
        <div className="popup__name">{country.country}</div>
        <div className="popup__cases">
          Cases: {numeral(country.cases).format('0,0')}
        </div>
        <div className="popup__recovered">
          Recovered: {numeral(country.recovered).format('0,0')}
        </div>
        <div className="popup__deaths">
          Deaths: {numeral(country.deaths).format('0,0')}
        </div>
      </div>
    </Popup>
  );
});

export default MapPopup;
