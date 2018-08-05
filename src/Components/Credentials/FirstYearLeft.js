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
  createData('ENG 111', 'Communication Skills 1', 3, 0, 3,'NONE', 2.00, '15-16'),
  createData('FIL 111', 'Komunikasyon sa Akademikong Filipino', 3, 0 ,3,'NONE',1.75, '15-16'),
  createData('MAT 111', 'College Algerbra', 3,0,3,'NONE',2.25,'15-16'),
  createData('SS 113','Introduction to Econ. With Taxation nd Land Reform',3,0,3,'NONE',1.50,'15-16'),
  createData('SS111','Philippine History and Culture',3,0,3,'NONE',1.75,'15-16'),
	createData('CS 111 ','Computer Concepts and Fundamentals',2,1,3,'NONE',1.25,'15-16'),
  createData('SS 112','General Psychology',3,0,2,'NONE',1.50,'15-16'),
  createData('PE 111', 'Physicl Education',3,0,3,'NONE',1.25,'15-16'),
  createData('NSTP 111', 'National Service Training Program',3,0,3,'NONE',1.25,'15-16'),
  	// 2nd Semester Data
  createData('ENG 122', 'Communication Skills 2', 3, 0, 3,'ENG 111', 1.50, '15-16'),
  createData('FIL 122', 'Pagbasa at Pagsulat Tungo sa Pananaliksik', 3, 0 ,3,'FIL 111',1.75, '15-16'),
  createData('MAT 122', 'Trigonometry w/ Analytic Geometry', 3,0,3,'MAT 111',1.75,'15-16'),
  createData('SS 121','Philippine Goverment and New Constitution',3,0,3,'NONE',1.25,'15-16'),
  createData('CS 121','Presentation Skills in information Technology',3,0,3,'NONE',1.50,'15-16'),
	createData('CS 122 ','Computer Programming 1(C+)',2,1,3,'NONE',2.75,'15-16'),
  createData('SS 122','Philisophy of Man',3,0,2,'NONE',1.75,'15-16'),
  createData('PE 122', 'Rhytmic Activities (Dances)',2,0,2,'PE 111',1.50,'15-16'),
  createData('NSTP 122', 'National Service Training Program 2',3,0,3,'NONE',1.00,'15-16')
	];

function FirstYearLeft(props) {

	const { classes } = props;
		return(
			<CSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={500}
	          	transitionAppearTimeout={500}
	          	transitionLeaveTimeout={300}
	          	transitionAppear={true}>
	          	<h3 style={{textAlign: 'center', fontFamily: 'Arial Helvetica San-serif'}}>First Year</h3>
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

FirstYearLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(FirstYearLeft);