import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class NavBar extends Component {

  render() {
    const { activeItem, handleItemClick, loggedInUser } = this.props

    return (
        <Menu pointing secondary>
          <Menu.Item name='BikeShare International' active={activeItem === 'BikeShare International'} onClick={handleItemClick} />
          <Menu.Item name='home' active={activeItem === 'home'} onClick={handleItemClick} />
          <Menu.Item
            name='profile'
            active={activeItem === 'profile'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name={loggedInUser ? "logout" : "login"}
              active={activeItem === 'logout'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
    )
  }
}
