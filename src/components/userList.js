import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Dustin', 22, 'Alice', 24, 'Nill'),
  createData('Mike', 41, 'Steven', 37, 'Nill'),
  createData('Bob', 28, 'Amla', 24, 'Nill'),
  createData('Naikin', 34, 'Kain', 67, 'Nill'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const UserList = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell style = {{backgroundColor:'#999999', fontSize:20}} >Name</StyledTableCell>
            <StyledTableCell style = {{backgroundColor:'#999999', fontSize:20}} align="left">Age</StyledTableCell>
            <StyledTableCell style = {{backgroundColor:'#999999', fontSize:20}} align="left">Nickname</StyledTableCell>
            <StyledTableCell style = {{backgroundColor:'#999999', fontSize:20}} align="left">Employee</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserList;
