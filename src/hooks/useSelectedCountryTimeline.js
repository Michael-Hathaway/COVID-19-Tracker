import { useState, useEffect } from 'react';

const useSelectedCountryTimeline = (selectedCountry) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const countryCode =
      selectedCountry === 'Worldwide' ? 'all' : selectedCountry;

    fetch(
      `http://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=120`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => setData([]));
  }, [selectedCountry]);

  return data;
};

export default useSelectedCountryTimeline;
