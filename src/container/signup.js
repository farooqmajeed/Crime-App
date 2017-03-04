import * as React from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router'

export class SignupComponent extends React.Component {

    render() {
        // const style = {
        //     fontSize: '17px',
        //     padding: '2px 23px 2px 23px',
        //     boxShadow: '5px 5px 5px black',
        //     border: 'outset 3px red'
        // }
       
        const Main_App = {

      backgroundColor:"#424242",
      textAlign:"left"
        
    }
        const style1 = {
            height: 400,
            width: '500',
            marginLeft: 500,
            textAlign: 'center',
            display: 'inline-block',    
            marginTop : 100
        };
        const login = {
            marginLeft : 170,
            marginTop : 20
        }
        const sign = {
           margin : 10
        }
        const para = {
           marginLeft : -110
        }
        
       
        return (
            <div >
                <AppBar style={Main_App}
                    title ="Crime Reporting App"
                    showMenuIconButton={true} />
                    <Paper style={style1} zDepth={0}>
                    <form onSubmit={this.props._submit} >
                        <h1 style={{color:'black'}}>SignUp</h1>
                          <TextField
                             hintText="Enter User Name"
                             floatingLabelText=" User Name"
                             name="uName"
                             ref = "uName"
                             onChange={this.props._inputHandler}
                             /><br />
                       <TextField
                             hintText="Enter Email Address"
                             floatingLabelText="Email Address"
                             name="email"
                             ref ="email"
                             value={this.props.signUpState.email}
                             onChange={this.props._inputHandler}
                             /><br />

                             <TextField
                             hintText="Enter password"
                             floatingLabelText="Password"
                              name="pass"
                              ref ="pass"
                              type="password"
                             value={this.props.signUpState.pass}
                            onChange={this.props._inputHandler}
                             /><br />

                         <RaisedButton type="submit" label="Submit"   style={login}/><br/>
                          <p style={para}>Create Account <Link to="/login">Login</Link></p>
                    
                    <br />
                   
                        </form>
                    </Paper>
                
            </div>
        )
    }
}
SignupComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}