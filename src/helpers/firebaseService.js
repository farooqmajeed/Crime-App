import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyA8ymPCJUnmevJi5yZq4T8V_vdubIAW8nY",
    authDomain: "crime-app-68ca1.firebaseapp.com",
    databaseURL: "https://crime-app-68ca1.firebaseio.com",
    storageBucket: "crime-app-68ca1.appspot.com",
    messagingSenderId: "843843541969"
  };
  firebase.initializeApp(config);

export class FirebaseService {

    static firebaseTimeStamp = firebase.database['ServerValue'].TIMESTAMP;
    static ref = firebase.database().ref();
     static refMperson = firebase.database().ref("MissingPerson");
    static storage = firebase.storage().ref();
    static auth = firebase.auth();

    // constructor() { }

    static saveMultipath(multipath) {
        return this.ref.update(multipath);
    } // saveMultipath

    static customAuth(user) {
        return this.auth.createUserWithEmailAndPassword(user.email, user.pass);
    } //AuthNewUser

    static customLogin(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.pass);
    } //loginUser

    static addNewUser(user) {
        return this.ref.child(user).set();
    } //AuthNewUser

    static getPushRef(path) {
        return this.ref.child(path).push();
    }
    
}