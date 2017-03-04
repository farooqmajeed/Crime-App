import * as React from "react";
import { Link } from "react-router"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';



export class SigninComponent extends React.Component {


    render() {
          const style = {
            fontSize: '17px',
            padding: '2px 23px 2px 23px',
            boxShadow: '5px 5px 5px black',
            border: 'outset 3px red'
        }
        // const center = {
        //     width: '90%',
        //     margin: '0 auto'
        // }
         const Main_App = {
            width: '100%',
            margin: '0 auto',
            backgroundColor: '#424242'
        }
        const style1 = {
            height: 400,
            width: '500',
            marginLeft: 630,
            textAlign: 'center',
            display: 'inline-block',
            marginTop : 100
        };
        const login = {
            marginLeft : 170,
            marginTop : 20
        }
      
        const para = {
           marginLeft : -110
        }
        return (
           
            <div>
                <AppBar style={Main_App}
                    title="Crime Reporting App"
                    showMenuIconButton={true} />
              
                    <Paper style={style1} zDepth={0}>
                    <form onSubmit={this.props._submit} >
                        <h1 style={{color:'black'}}>Login</h1>
                        <TextField
                             hintText="Enter Email Address"
                             floatingLabelText="Email Address"
                             name="email"
                          
                             onChange={this.props._inputHandler}
                             /><br />

                             <TextField
                             hintText="Enter password"
                             floatingLabelText="Password"
                              name="pass"
                              type = "Password"
                            
                             onChange={this.props._inputHandler}
                             /><br />

                         <RaisedButton type="submit" label="Login"  style={login}/><br/>
                         
                   
                    <br />
                   
                        </form>
                    </Paper>
              
            </div>
        )
    }
}
SigninComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}