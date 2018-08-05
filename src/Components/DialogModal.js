import React from 'react';
import { Dialog, DialogActions, Button} from 'react-mdl';

class DialogModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	openDialog: false,
    	sendMessage: {}
    };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  handleSubmit(){
  	if(this.refs.message.value === '' || this.refs.name.value === '' ){
  		alert('Fill Up the Form');
  	}else {
  		this.setState({sendMessage: {
  			name: this.refs.name.value,
  			message: this.refs.message.value
  		}}, function handleCloseDialog() {
  			console.log(this.state.sendMessage);
  			alert('Message Send!');
  			this.refs.name.value = '';
  			this.refs.message.value = '';
  			this.setState({openDialog:false});
  		})
  	}
  }

  render() {
    return (
      <div>
        <Button colored onClick={this.handleOpenDialog} raised ripple>Send A Message</Button>
        <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog}>
          <DialogActions>
          <label>Name:
          	<input type="text" ref="name"/>
           </label>
          		<textarea style={{margin: 'auto', height: '100px',width: '250px'}} ref="message"></textarea>
          
            <Button type='button' onClick={this.handleSubmit.bind(this)}>Send Message</Button>
            <Button type='button' onClick={this.handleCloseDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DialogModal;