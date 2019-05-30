import React from 'react'
import { Card } from 'semantic-ui-react'
import UserFavorite from './UserFavorite'

class UserFavoritesContainer extends React.Component {
  render() {
    return (
    <Card.Group>
      {this.props.userFavorites.map(favorite => <UserFavorite key={favorite.id} favorite={favorite} deleteFavorite={this.props.deleteFavorite}/>)}
    </Card.Group>
    )
  }
}

export default UserFavoritesContainer;
