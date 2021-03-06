import React from 'react';
import Card from './Card';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import '../style/InfoBox.css';

const CovidCasesInfoBox = ({ title, cases, total }) => {
  return (
    <Card className="infoBox">
      <Typography className="infoBox__title" color="textSecondary">
        {title}
      </Typography>
      <h2 className={`infoBox__cases ${title === 'Recovered' && 'green'}`}>
        + {numeral(cases).format('0,0')}
      </h2>
      <Typography className="infoBox__total" color="textSecondary">
        Total: {numeral(total).format('0,0')}
      </Typography>
    </Card>
  );
};

export default CovidCasesInfoBox;
