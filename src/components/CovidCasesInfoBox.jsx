import React from 'react';
import Card from './Card';
import { Typography } from '@material-ui/core';
import '../style/InfoBox.css';

const CovidCasesInfoBox = ({ title, cases, total }) => {
  return (
    <Card className="infoBox">
      <Typography className="infoBox__title" color="textSecondary">
        {title}
      </Typography>
      <h2 className="infoBox__cases">Today: {cases}</h2>
      <Typography className="infoBox__total" color="textSecondary">
        Total: {total}
      </Typography>
    </Card>
  );
};

export default CovidCasesInfoBox;
