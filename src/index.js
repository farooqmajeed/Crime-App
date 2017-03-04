import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App';
import Home from './components/home';
import SignUp from './components/signup';
import Login from './components/login';
import Image from './components/card';
import MissingPerson from './components/MissingPerson';
import MissingData from './components/MissingData';
import crimeInformer from './components/crimeInformar';
import crimeData from './components/crimeData';
import NestedAbout from './components/about';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// import Nav from './components/nav.js';
// import ReactRouter from 'react-router';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/login" component={Login}></Route>
               
                <Route path="/home" component={Home}>
            <IndexRoute component={Image}/>
                 <Route path="MissingPerson" component={MissingPerson}></Route>
                <Route path="about" component={NestedAbout}></Route>
                <Route path= "crimeData" component={crimeData}></Route>
                <Route path="crimeInformer" component={crimeInformer}></Route>
                <Route path="MissingData" component={MissingData}></Route>
                 </Route>
                <Route path="/" component={App}>
                    <IndexRoute component={SignUp} />
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
),
    document.getElementById('root')
);
