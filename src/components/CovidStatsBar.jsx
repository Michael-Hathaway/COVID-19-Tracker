import React from 'react';
import CovidCasesInfoBox from './CovidCasesInfoBox';
import CovidDataLineGraph from './CovidDataLineGraph';
import Card from './Card';
import '../style/app.css';

const CovidStatsBar = ({ selectedCountry, countryData, timelineData }) => {
  return (
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
  );
};

export default CovidStatsBar;
