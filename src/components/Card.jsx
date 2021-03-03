import React from 'react';
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
} from '@material-ui/core';

const Card = ({ children }) => {
  return (
    <MuiCard>
      <MuiCardContent>{children}</MuiCardContent>
    </MuiCard>
  );
};

export default Card;
