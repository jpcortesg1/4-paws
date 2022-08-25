import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

var styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, Qualification, Tasks, Finished, Pending) {
  id += 1;
  return { id, name, Qualification, Tasks, Finished, Pending };
}

var data = [
  createData('Andres Carmona', 4.5, 'Walker', 24, 40),
  createData('Julian Carrizo', 3.3, 'Walker', 9, 13),
  createData('Carlos Zapata', 2.6, 'Coustumers Sevice', 16, 60),
  createData('Andrea Gaviria', 3.5, 'Veterinarian', 67, 33),
  createData('Luisa Martinez', 5, 'Veterinarian', 49, 39),
];

function SimpleTable(props) {
  var { classes } = props;
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell numeric>Qualification</TableCell>
            <TableCell numeric>Tasks</TableCell>
            <TableCell numeric>Finished</TableCell>
            <TableCell numeric>Pending</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.Qualification}</TableCell>
                <TableCell numeric>{n.Tasks}</TableCell>
                <TableCell numeric>{n.Finished}</TableCell>
                <TableCell numeric>{n.Pending}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
