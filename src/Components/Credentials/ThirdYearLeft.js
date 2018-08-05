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
  createData('LIT 310', 'Asian Literature', 3, 0, 3,'LIT 211', 1.50, '17-18'),
  createData('MAT 315', 'Discrete Mathematics', 3, 0, 3,'NONE', 2.50, '17-18'),
  createData('HUM 311', 'Arts Appreciation', 3, 0, 3,'NONE', 2.00, '17-18'),
  createData('SS 314', 'Society And Culture w/ Family Planning', 3, 0, 3,'NONE', 1.75, '17-18'),
  createData('CS 311', 'Logic Design and Switching Theory', 2, 2, 4,'CS122', 1.75, '17-18'),
  createData('CS 316', 'Intro to Java Programming', 2, 1, 3,'CS 122', 225, '17-18'),
  createData('CS 317', 'Advance Database Management System', 2, 1, 3,'CS 224', 2.00, '17-18'),

  	// 2nd Semester Data
	createData('MAT 326', 'Probality and Statistic', 3, 0, 3,'NONE', 2.75, '17-18'),
  createData('QC 320', 'Quality Conciousness, Habits an Processes', 3, 0, 3,'NONE', 2.25, '17-18'),
  createData('CS 323', 'Computer System Organization', 2, 2, 4,'CS 311', 2.00, '17-18'),
  createData('CS 324', 'Automata and Language Theory', 2, 2, 4,'MAT 315', 2.00, '17-18'),
  createData('CS 325', 'System Analysis and Design', 2,1, 3,'3rd Yr', 2.75, '17-18'),
  createData('FEL 321', 'Free Elective 1 (Operations Research)', 3, 0, 3,'NONE', 1.25, '17-18'),
	];

function ThirdYearLeft(props) {

	const { classes } = props;
		return(
			<CSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={500}
	          	transitionAppearTimeout={500}
	          	transitionLeaveTimeout={300}
	          	transitionAppear={true}>
	          	<h3 style={{textAlign: 'center', fontFamily: 'Arial Helvetica San-serif'}}>Third Year</h3>
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

ThirdYearLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(ThirdYearLeft);