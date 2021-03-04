import { useState, useEffect } from 'react';

const useSelectedCountryDetails = (selectedCountry) => {
  const [countryData, setCountryData] = useState({});

  const fetchCountryData = async (selectedCountry) => {
    const url =
      selectedCountry === 'Worldwide'
        ? '//disease.sh/v3/covid-19/all'
        : `//disease.sh/v3/covid-19/countries/${selectedCountry}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  };

  useEffect(() => {
    fetchCountryData(selectedCountry);
  }, [selectedCountry]);

  return countryData;
};

export default useSelectedCountryDetails;
