import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

class UserFavorite extends React.Component {
  render() {
    console.log("faves", this.props.favorite);
    return (
      <Card>
        <Card.Content header={this.props.favorite.name} />
        <Card.Content description={this.props.favorite.location} />
        <Card.Content extra>
          <Icon name='user' />
          {this.props.favorite.name}
        </Card.Content>
      </Card>
    )
  }
}

export default UserFavorite;
