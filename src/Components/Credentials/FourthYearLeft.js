import { CSSTransitionGroup } from 'react-transition-group';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


	const styles = theme => ({
	  root: {
	    width: '100%',
	    marginTop: theme.spacing.unit * 3,
	    overflowX: 'auto',
	  },
	  table: {
	    minWidth: 700,
	  },
	});

	let id = 0;
	function createData(coursecode, descriptivetitle , lec,lab,units, prerequisite, grade,yeartaken) {
	  id += 1;
	  return { id, coursecode,descriptivetitle,lec,lab,units,prerequisite,grade ,yeartaken};
	}

	const data = [
	// 1st Semester Data
  createData('ETH 410', 'Professional Ethics', 3, 0, 3,'4th Yr', 2.75, '18-19'),
  createData('CS 416', 'Data Communication', 3, 2, 3,'CS 323', 'NOT YET TAKEN', '18-19'),
  createData('CS 411', 'Thesis Proposal', 3, 0, 3,'CS 325', 'NOT YET TAKEN', '18-19'),
  createData('CS 417', 'Operating System', 2, 0, 4,'CS 323', 'NOT YET TAKEN', '18-19'),
  createData('CS 413', 'Management Information System', 2, 0, 4,'4th Yr', '2.25', '18-19'),
  createData('CS 412', 'Free Elective 2 (Animation)', 2, 1, 3,'CS 323', 'NOT YET TAKEN', '18-19'),
  	// 2nd Semester Data
  	createData('CS 425', 'Artificial Intelligence', 2, 2, 4,'4th Yr', 'NOT YET TAKEN', '18-19'),
  createData('CS 426', 'Software Engineerin', 2, 2, 4,'4th yr', 'NOT YET TAKEN', '18-19'),
  createData('CS 427', 'Thesis Writing and Software Project 2', 3, 0, 3,'CS 411', 'NOT YET TAKEN', '18-19'),
  createData('CS 424', 'Rizal Life Works and Writings', 3, 0, 3,'NONE', 2.25, '18-19'),
  createData('CS 422', 'Practicum (200 hours)', 3, 0 , 3,'NONE', 'NOT YET TAKEN', '18-19'),
	];

function SecondYearLeft(props) {

	const { classes } = props;
		return(
			<CSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={500}
	          	transitionAppearTimeout={500}
	          	transitionLeaveTimeout={300}
	          	transitionAppear={true}>
	          	<h3 style={{textAlign: 'center', fontFamily: 'Arial Helvetica San-serif'}}>Second Year</h3>
				    <Paper className={classes.root}>
			      <Table className={classes.table}>
			        <TableHead>
			          <TableRow>
			            <TableCell numeric style={{textAlign:'center'}}>COURSE CODE</TableCell>
			            <TableCell>DESCRIPTIVE TITLE</TableCell>
			            <TableCell numeric>LEC</TableCell>
			            <TableCell numeric>LAB</TableCell>
			            <TableCell numeric>UNITS</TableCell>
			            <TableCell numeric>PRE-REQUISITE</TableCell>
			            <TableCell numeric>GRADE</TableCell>
			            <TableCell numeric>YEAR TAKEN</TableCell>
			          </TableRow>
			        </TableHead>
			        <TableBody>
			          {data.map(n => {
			            return (
			              <TableRow key={n.id}>
			                <TableCell numeric style={{textAlign: 'left'}}>
			                  {n.coursecode}
			                </TableCell>
			                <TableCell numeric style={{textAlign: 'left'}}>{n.descriptivetitle}</TableCell>
			                <TableCell numeric>{n.lec}</TableCell>
			                <TableCell numeric>{n.lab}</TableCell>
			                <TableCell numeric>{n.units}</TableCell>
			                 <TableCell numeric>{n.prerequisite}</TableCell>
			                <TableCell numeric>{n.grade}</TableCell>
			                <TableCell numeric>{n.yeartaken}</TableCell>
			              </TableRow>
			            );
			          })}
			        </TableBody>
			      </Table>
			    </Paper>
			    <br/>
			</CSSTransitionGroup>
		)
}

SecondYearLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(SecondYearLeft);