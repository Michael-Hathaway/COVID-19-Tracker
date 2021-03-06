import React, { useState } from 'react';
import useCountriesData from '../hooks/useCountriesData';
import useSelectedCountryDetails from '../hooks/useSelectedCountryDetails';
import useSelectedCountryTimeline from '../hooks/useSelectedCountryTimeline';
import useMapDetails from '../hooks/useMapDetails';
import Header from './Header';
import CovidStatsBar from './CovidStatsBar';
import Card from './Card';
import Map from './Map';
import Table from './Table';
import 'leaflet/dist/leaflet.css';
import '../style/app.css';

const App = () => {
  const countries = useCountriesData();
  const [selectedCountry, setSelectedCountry] = useState('Worldwide');
  const countryData = useSelectedCountryDetails(selectedCountry);
  const timelineData = useSelectedCountryTimeline(selectedCountry);
  const [mapCenter, mapZoom] = useMapDetails(countryData);

  return (
    <div className="app">
      <div className="app__top">
        <Header
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <CovidStatsBar
          selectedCountry={selectedCountry}
          countryData={countryData}
          timelineData={timelineData}
        />
      </div>

      <div className="app__bottom">
        <Card className="app__bottom__left">
          <Map countries={countries} mapCenter={mapCenter} mapZoom={mapZoom} />
        </Card>
        <Card className="app__bottom__right">
          <h3>Active Cases By Country</h3>
          <Table countries={countries} />
        </Card>
      </div>
    </div>
  );
};

export default App;
