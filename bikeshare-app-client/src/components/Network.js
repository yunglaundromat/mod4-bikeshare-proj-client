import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

class Network extends React.Component {
  render() {
    return (
    <Card>
      <Card.Content header={this.props.network.name} />
      <Card.Content description={this.props.network.name} />
      <Card.Content extra>
        <Icon name='copyright outline' />
        {this.props.network.company[0]}
      </Card.Content>
    </Card>
    )
  }
}

export default Network;
