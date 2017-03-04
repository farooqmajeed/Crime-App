import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { FirebaseService } from '../helpers/firebaseService'
import { signUp } from '../store/action/auth'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import * as firebase from 'firebase';

class CrimeData extends Component {
    constructor() {
        super();
        this.state = {
            crime: '',
            mobile: '',
            location: '',
            age:'',
           
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        let multipath = {};
        var mUser = {
            crime: this.state.fullname,
            mobile: this.state.mobile,     
            location: this.state.location,
             age: this.state.age,
            
        }
          console.log(mUser)
        firebase.database().ref('/donors/').push({mUser});

    }
    render() {
        return (
            <div ><center>
                <SignupComponent signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
            </center>
            </div>
        );
    }
}



class SignupComponent extends React.Component {

    render() {
        
        return (
            <div >
              
                <h1>Crime Information</h1>
                <form onSubmit={this.props._submit} >
                   <TextField
                        hintText="Crime info"
                        name="Crime info"
                        value={this.props.signUpState.fullname}
                     floatingLabelText="crime Info"
                        onChange={this.props._inputHandler}
                        /><br />

                   <TextField
                        type="text"
                        hintText="Mobile"
                        name="mobile"
                        value={this.props.signUpState.mobile}
                       floatingLabelText="Mobile"
                        onChange={this.props._inputHandler}
                        /><br />

                    <TextField
                        type="text"
                        hintText="Location"
                        name="location"
                        value={this.props.signUpState.address}
                        floatingLabelText="location"
                        onChange={this.props._inputHandler}
                        /><br />
                        <TextField
                        type="text"
                        hintText="Age"
                        name="age"
                        value={this.props.signUpState.age}
                        floatingLabelText="Age"
                        onChange={this.props._inputHandler}
                        /><br />
                        <br />

                 <RaisedButton type="submit" label="Crime Info" backgroundColor="" Color ="white" /> <br /><br />
                </form>
                
            </div>
        )
    }
}


export default CrimeData;
