import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class NavBar extends Component {

  render() {
    const { activeItem } = this.props

    return (
        <Menu pointing secondary>
          <Menu.Item name='BikeShare International' active={activeItem === 'BikeShareInternational'} onClick={this.props.handleItemClick} />
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.props.handleItemClick} />
          <Menu.Item
            name='profile'
            active={activeItem === 'profile'}
            onClick={this.props.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name={this.props.loggedInUser ? "Logout" : "Login"}
              active={activeItem === 'logout'}
              onClick={this.props.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
    )
  }
}
