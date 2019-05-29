import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {

  render() {
    const { activeItem, handleItemClick, client } = this.props

    return (
        <Menu pointing secondary>
          <Menu.Item name='BikeShare International' active={activeItem === 'BikeShare International'} onClick={handleItemClick} />
          <Menu.Item name='home' active={activeItem === 'home'} onClick={handleItemClick} />
          <Menu.Item
            name={client.loggedIn ? client.name : "profile"}
            active={activeItem === 'profile'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name={client.loggedIn ? "logout" : "login"}
              active={activeItem === 'login'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
    )
  }
}
