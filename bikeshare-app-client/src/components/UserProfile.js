import React, { Fragment } from 'react'
import { Statistic, Header, Icon } from 'semantic-ui-react'
import UserFavoritesContainer from './UserFavoritesContainer'

class UserProfile extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3000/users/1")
    .then(r => r.json())
    .then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <Fragment>
        <Header as='h2'>
          <Icon name='desktop' />
          <Header.Content>{this.props.userInfo.name}'s dashboard</Header.Content>
        </Header>
        <Statistic.Group widths="two">
          <Statistic>
            <Statistic.Value>{this.props.userFavorites.length}</Statistic.Value>
            <Statistic.Label>Favorited Networks</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{this.props.userFavorites[this.props.userFavorites.length - 1].location}</Statistic.Value>
            <Statistic.Label>Most Recent Trip</Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Header as='h2'>
          <Icon name='gratipay' />
          <Header.Content>{this.props.userInfo.name}'s favorite networks </Header.Content>
        </Header>
        <UserFavoritesContainer userFavorites={this.props.userFavorites} />
      </Fragment>
    )
  }
}

export default UserProfile;
