import React from 'react';
import { TableRow as MuiTableRow, TableCell } from '@material-ui/core';

const TableRow = ({ country, cases }) => {
  return (
    <MuiTableRow className="table__row">
      <TableCell className="table__data">{country}</TableCell>
      <TableCell className="table__data">
        <strong>{cases}</strong>
      </TableCell>
    </MuiTableRow>
  );
};

export default TableRow;
