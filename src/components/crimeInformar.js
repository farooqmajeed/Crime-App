import React, { Component } from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import firebase from 'firebase';
 
class CrimeInfo extends Component {
   constructor(){
       super();

      
       this.state = {
           donors : []
       }
   }
    
    componentWillMount(){
        var donors = [];

        firebase.database().ref('/donors/').on('value', (date) => {
            let obj = date.val();

            for(var prop in obj){
                donors.push(obj[prop].mUser);
                console.log(obj[prop]);
                this.setState({
                    donors: donors
                })
                console.log(this.state.donors);
            }
        })
    }
   
   render() {
        return (
            <div >
                <h1>Crimes Report </h1>
             
                                 
                      <Table>
    <TableHeader>
      <TableRow>
           <TableHeaderColumn>Crime  </TableHeaderColumn>
            <TableHeaderColumn>Mobile </TableHeaderColumn>   
        <TableHeaderColumn>Age Informer </TableHeaderColumn>
        <TableHeaderColumn>location </TableHeaderColumn> 
       
       
       
      </TableRow>
    </TableHeader>
  </Table>
  

{this.state.donors.map((z,i)=>{
                    return(
                        
                      <Table>

    <TableBody>
      <TableRow>
            <TableRowColumn>{z.crime}</TableRowColumn>
              <TableRowColumn>{z.mobile}</TableRowColumn>
        <TableRowColumn>{z.age}</TableRowColumn>
        <TableRowColumn>{z.location}</TableRowColumn>
      
      
      </TableRow>
    </TableBody>
  </Table>
  
  
  )
                })
                  
                }

            </div>
        );
    }
}

export default CrimeInfo;
