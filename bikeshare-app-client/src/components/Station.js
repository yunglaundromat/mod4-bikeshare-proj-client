import React from 'react'
import { Button, Card } from 'semantic-ui-react'

class Station extends React.Component {
  render() {
    return (
       <Card>
         <Card.Content>
           <Card.Header>{this.props.station.name}</Card.Header>
           <Card.Meta>status: {this.props.station.extra.status}</Card.Meta>
           <Card.Description>
             {this.props.station.free_bikes + this.props.station.empty_slots} total slots
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button basic color='green'>
              {this.props.station.free_bikes} Free Bikes
             </Button>
             <Button basic color='blue'>
              {this.props.station.empty_slots} Available Slots
             </Button>
           </div>
         </Card.Content>
       </Card>
    )
  }
}

export default Station;
