import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {

  render() {
    const { activeItem } = this.props

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.props.handleItemClick} />
          <Menu.Item
            name='profile'
            active={activeItem === 'profile'}
            onClick={this.props.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.props.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
