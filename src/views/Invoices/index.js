import React        from 'react';

/* Material UI */
import {
  makeStyles
}                   from '@material-ui/core/styles';
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
}                   from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  }
}));

const Invoices = () => {
  const classes = useStyles();

  return (
    <TableContainer
      className={classes.root}
      component={Paper}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Bill To</TableCell>
            <TableCell align="right">Inv No</TableCell>
            <TableCell align="right">Total (AUD)</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(row => (
            <TableRow
              hover
              key={row}
            >
              <TableCell>Example Company</TableCell>
              <TableCell align="right">{row + 100}</TableCell>
              <TableCell align="right">5000</TableCell>
              <TableCell align="right">Paid</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Invoices;
