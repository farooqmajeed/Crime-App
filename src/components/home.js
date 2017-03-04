import React, { Component } from 'react';
import { Loggedin } from '../store/action/auth'
import { connect } from 'react-redux'
import { Link } from 'react-router';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Image from './card.js'
import { FirebaseService } from '../helpers/firebaseService'
// import { List, ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const homeapp = {
   width : '15  0%',
   padding : 0,
   margin : 0,
   
}
const Main_App = {
      backgroundColor:"#424242",
      textAlign:"left"
        }

 const btnInAppBar = {
     backgroundColor: "#E0F2F1",
     margin: 12

 }       

const styles = {
    root: {
        border: '2px outset',
        display: 'flex',
        flexWrap: 'wrap',
    },
   
};

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.authReducer.user.email
        }
    }

    componentWillMount() {
        let key = localStorage.getItem('currentUser')
        FirebaseService.ref.child(`/Blood`).on("child_added", (snapshot) => {
            if (snapshot.val().type === 'donor') {

            console.log(snapshot.val())
            }
        })
        FirebaseService.ref.child(`/users/${key}`).on("value", (snapshot) => {
            if (snapshot.val()) {
                this.setState({
                    name: snapshot.val().firstname + " " + snapshot.val().lastname
                })
                this.props.Loggedin(snapshot.val())
            }
        })
    }
    render() {
        
        setInterval(() => {
            (this.props.authReducer.user.type === 'donor') ? this.setState(<h1></h1>) : <h1></h1>
        }, 200)
        return (
           
            <div className="App">
                 <AppBar style={Main_App}
    title="Crime Reporting App"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  > 
  <Link to="/home/MissingData"><RaisedButton type="submit" label="Register Report" style ={btnInAppBar} /> </Link>
<Link to="/home/MissingPerson"><RaisedButton type="submit" label="Missing Person" style ={btnInAppBar} /> </Link>
  <Link to="/home/crimeData"><RaisedButton type="submit" label="Crime Info" style ={btnInAppBar} /> </Link>
 <Link to="/home/CrimeInformer"><RaisedButton type="submit" label="CrimeInformer" style ={btnInAppBar} /> </Link>
  <Link to="/home/about"><RaisedButton type="submit" label="About" style ={btnInAppBar} /> </Link>
   </AppBar>
                
 

                    
                    <div>
                        
                        {this.props.children}
                        
                    </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => { // mapStateToProps ye iska apna function he
    return {
        authReducer: state
    }
}
const mapDispatchToProps = (dispatch) => { // mapDispatchToProps ye iska apna function he
    return {
        Loggedin: (data) => {
            dispatch(Loggedin(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);  

