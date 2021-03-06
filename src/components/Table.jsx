import React from 'react';
import TableRow from './TableRow';
import {
  TableContainer,
  TableHead,
  Table as MuiTable,
  TableBody,
  TableRow as MuiTableRow,
  TableCell,
} from '@material-ui/core';
import '../style/Table.css';

const Table = ({ countries }) => {
  const renderTableRows = () => {
    // sort countries by number of active cases
    // create copy, so we don't change dropdown order
    const copyOfCountries = [...countries];
    copyOfCountries.sort((a, b) => (a.cases < b.cases ? 1 : -1));

    return copyOfCountries.map(({ country, cases }) => {
      return <TableRow key={country} country={country} cases={cases} />;
    });
  };

  return (
    <TableContainer className="table">
      <MuiTable stickyHeader>
        <TableHead>
          <MuiTableRow>
            <TableCell>Country</TableCell>
            <TableCell>Active Cases</TableCell>
          </MuiTableRow>
        </TableHead>
        <TableBody className="table__body">{renderTableRows()}</TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default React.memo(Table);
