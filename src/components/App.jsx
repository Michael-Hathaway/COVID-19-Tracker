import React, { useState } from 'react';
import useCountriesData from '../hooks/useCountriesData';
import useSelectedCountryDetails from '../hooks/useSelectedCountryDetails';
import useSelectedCountryTimeline from '../hooks/useSelectedCountryTimeline';
import Header from './Header';
import Card from './Card';
import CovidCasesInfoBox from './CovidCasesInfoBox';
import Map from './Map';
import Table from './Table';
import CovidDataLineGraph from './CovidDataLineGraph';
import '../style/app.css';

const App = () => {
  const countries = useCountriesData();
  const [selectedCountry, setSelectedCountry] = useState('Worldwide');
  const countryData = useSelectedCountryDetails(selectedCountry);
  const timelineData = useSelectedCountryTimeline(selectedCountry);

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
            <CovidDataLineGraph
              country={selectedCountry}
              data={timelineData}
              type="deaths"
            />
          </Card>
        </div>
      </div>

      <Card className="app__bottom">
        <div className="app__bottom__left"></div>
        <div className="app__bottom__right">
          <h3>Active Cases By Country</h3>
          <Table countries={countries} />
        </div>
      </Card>
    </div>
  );
};

export default App;
