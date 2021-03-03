import { useState, useEffect } from 'react';

const useCountriesData = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return countries;
};

export default useCountriesData;
