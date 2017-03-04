import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Image extends Component {
    constructor(props) {
        super(props);

    }

         render() { 
            return(
                  <div>
                 <Card>
    <CardHeader
      title="Kill many Peoples"
      subtitle="Don of USA"
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROflkzwowLXm2_5MjGbIKKbDeAd9DIE9Gr077_2O2KkW2oF_z3lg"
    />
    <CardMedia
      overlay={<CardTitle title="Crime In Pakistan" subtitle="Karachi Crimes" />}
    >
      <img src="https://cdn.pixabay.com/photo/2017/01/30/21/51/burglary-2022162__340.png" />
    </CardMedia>
    <CardTitle title="Bomb Blast" subtitle="In Quetta" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    </Card>
     </div>
            );

     
    }
}

export default Image;