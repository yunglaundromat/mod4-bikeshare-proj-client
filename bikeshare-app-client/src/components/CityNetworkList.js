import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import NetworkListCard from './NetworkListCard'

class CityNetworkList extends React.Component {
  render() {
    return (
      <div>

        {this.props.currentCity ?
        <div>
          <Header as='h2' icon textAlign='center'>
            <Icon name='bicycle' circular />
            <Header.Content>Showing all results for {this.props.currentCity}</Header.Content>
          </Header>

           {this.props.currentBikeShares.map(network => <NetworkListCard key={network.name} network={network} onBikeShareClick={this.props.onBikeShareClick} />)}
        </div>
           : null }

      </div>
    )
  }
}

export default CityNetworkList;
