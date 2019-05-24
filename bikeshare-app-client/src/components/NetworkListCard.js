import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

class NetworkListCard extends React.Component {
  render() {
    return (
    <Card value={this.props.network.id} onClick={(e, target) => this.props.onBikeShareClick(e, target)}>
      <Card.Content header={this.props.network.name} />
      <Card.Content description={this.props.network.location.city} />
      <Card.Content extra>
        <Icon name='copyright outline' />
        {this.props.network.company[0]}
      </Card.Content>
    </Card>
    )
  }
}

export default NetworkListCard;
