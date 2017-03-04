import React, { Component } from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import firebase from 'firebase';
 
class MissingPerson extends Component {
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
                <h1>Missing Persons Report </h1>
             
                                 
                      <Table>
    <TableHeader>
      <TableRow>
           <TableHeaderColumn>Full Name  </TableHeaderColumn>
            <TableHeaderColumn>Mobile </TableHeaderColumn>   
        <TableHeaderColumn>Age </TableHeaderColumn>
        <TableHeaderColumn>Address </TableHeaderColumn> 
       
       
       
      </TableRow>
    </TableHeader>
  </Table>
  

{this.state.donors.map((z,i)=>{
                    return(
                        
                      <Table>

    <TableBody>
      <TableRow>
            <TableRowColumn>{z.fullname}</TableRowColumn>
              <TableRowColumn>{z.mobile}</TableRowColumn>
        <TableRowColumn>{z.age}</TableRowColumn>
        <TableRowColumn>{z.address}</TableRowColumn>
      
      
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

export default MissingPerson;
