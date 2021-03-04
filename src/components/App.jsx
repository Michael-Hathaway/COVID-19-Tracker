import React, { useState } from 'react';
import useCountriesData from '../hooks/useCountriesData';
import useSelectedCountryDetails from '../hooks/useSelectedCountryDetails';
import useSelectedCountryTimeline from '../hooks/useSelectedCountryTimeline';
import useMapDetails from '../hooks/useMapDetails';
import Header from './Header';
import Card from './Card';
import CovidCasesInfoBox from './CovidCasesInfoBox';
import Map from './Map';
import Table from './Table';
import CovidDataLineGraph from './CovidDataLineGraph';
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
        <div className="app__stats">
          <Card className="app__stats__container">
            <CovidCasesInfoBox
              title="Coronavirus Cases"
              total={countryData.cases}
              cases={countryData.todayCases}
            />
            <br />
            <CovidDataLineGraph
              country={selectedCountry}
              data={timelineData}
              type="cases"
            />
          </Card>
          <Card className="app__stats__container">
            <CovidCasesInfoBox
              title="Recovered"
              total={countryData.recovered}
              cases={countryData.todayRecovered}
            />
            <br />
            <CovidDataLineGraph
              country={selectedCountry}
              data={timelineData}
              type="recovered"
            />
          </Card>
          <Card className="app__stats__container">
            <CovidCasesInfoBox
              title="Deaths"
              total={countryData.deaths}
              cases={countryData.todayDeaths}
            />
            <br />
            <CovidDataLineGraph
              country={selectedCountry}
              data={timelineData}
              type="deaths"
            />
          </Card>
        </div>
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
