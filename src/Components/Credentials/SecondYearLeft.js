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
  createData('ENG 213', 'Oral Comm. & Public Speaking', 3, 0, 3,'ENG 122', 2.00, '16-17'),
  createData('PHY 211', 'Physics 1', 3, 0, 3,'NONE', 2.00, '16-17'),
  createData('CS 212', 'Computer Programming', 2, 0, 3,'CS 122', 1.50, '16-17'),
  createData('CS 213', 'Introduction to Visual Basic', 2, 0, 3,'CS 122', 2.00, '16-17'),
  createData('MAT 213', 'Differential Calculus', 3, 0, 3,'CS 111', 2.50, '16-17'),
  createData('FIL 213', 'Masining na Pagpapahayag', 3, 0, 3,'FIL 122', 1.75, '16-17'),
  createData('PE 213', 'Specialized Athletic', 2, 0, 2,'PE 122', 1.25, '16-17'),
  	// 2nd Semester Data
  	createData('LIT 221', 'Philippine Literature', 3, 0, 3,'ENG 122', 2.00, '16-17'),
  createData('PHY 222', 'Physics 2', 3, 0, 3,'PHY 211', 2.50, '16-17'),
  createData('MAT 224', 'Integral Calculus', 4, 0, 4,'MAT 213', 2.00, '16-17'),
  createData('CS 224', 'Database Management System', 2, 1, 3,'CS 122', 1.75, '16-17'),
  createData('CS 225', 'Data Structure and Algorithm', 2, 1, 3,'CS 122', 2.00, '16-17'),
  createData('PE 224', 'Group Games', 0, 0, 3,'FIL 122', 1.50, '16-17'),
  createData('ACC 220', 'Principle of Accounting', 3, 0, 3,'NONE', 3, '16-17'),
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