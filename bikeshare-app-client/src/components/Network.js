import React from 'react'
import { Button, Icon, Item } from 'semantic-ui-react'

class Network extends React.Component {
  render() {
    return (
    <Item.Group divided>
      <Item>
        <Item.Content>
          <Item.Header as='a'>{this.props.selectedNetwork.name}</Item.Header>
          <Item.Meta>
            <span>{this.props.selectedNetwork.company}</span>
          </Item.Meta>
          <Item.Description></Item.Description>
          <Item.Extra>
            <Button primary onClick={() => this.props.onAddNetworkToProfile(this.props.selectedNetwork)}>
              Add this network to my favorites!
              <Icon name='right chevron' />
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>

    )
  }
}

export default Network;
