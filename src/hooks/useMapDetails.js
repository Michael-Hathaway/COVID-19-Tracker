import { useState, useEffect } from 'react';

const useMapDetails = (country) => {
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    if (country.countryInfo) {
      setMapCenter({
        lat: country.countryInfo.lat,
        lng: country.countryInfo.long,
      });
    } else {
      setMapCenter({ lat: 34.80746, lng: -40.4796 });
    }
    setMapZoom(3);
  }, [country]);

  return [mapCenter, mapZoom];
};

export default useMapDetails;
