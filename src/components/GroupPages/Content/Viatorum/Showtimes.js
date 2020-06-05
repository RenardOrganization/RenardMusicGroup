import React from 'react';
import { Grid, Button, Paper} from '@material-ui/core';
import viaLogo from '../../../../img/BohemianQuartet/Logo.JPG'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    margin: 0,
  },
});


function createData(venue, date, city, ticketprice) {
  return { venue, date, city, ticketprice };
}

const rows = [
  createData('Tobin Auditorium', '1/1/2020', 'San Antonio, Texas', 100),
  createData('Austin City Limits Auditorium', '1/2/2020', 'Austin, Texas', 100),
];

export default function App() {
  const classes = useStyles();
  return (
        <Grid container
        style={{backgroundColor: ''}}
        direction="column"
        className="GroupPage_Content_Row"
        xs={9}
        >
          <TableContainer component={Paper}>
            <Table className={classes.table}  aria-label="simple table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell component="th" scope="row"><b>{row.venue}</b></TableCell>
                    <TableCell align="right">{row.city}</TableCell>
                    <TableCell align="right"><Button variant="contained" color="Primary">Get Tickets (${row.ticketprice}+)</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
    );
}  