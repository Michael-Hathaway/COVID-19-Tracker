import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import '../style/Header.css';

const Header = ({ countries, selectedCountry, setSelectedCountry }) => {
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
  };

  const renderCountryMenuOptions = () => {
    return countries.map((country) => {
      return (
        <MenuItem key={country.country} value={country.countryInfo.iso2}>
          {country.country}
        </MenuItem>
      );
    });
  };

  return (
    <div className="header">
      <div className="header__title">
        <h1>COVID-19 Tracker</h1>
      </div>
      <FormControl className="header__dropdown">
        <Select
          variant="outlined"
          value={selectedCountry}
          onChange={onCountryChange}
        >
          <MenuItem key="Worldwide" value="Worldwide">
            Worldwide
          </MenuItem>
          {renderCountryMenuOptions()}
        </Select>
      </FormControl>
    </div>
  );
};

export default Header;
