import React, { Component } from 'react';
import VenueRow from './VenueRow.js'
import Mapbox from './Mapbox'
import VenueListingEditBox from './VenueListingEditBox'


class VenueListings extends Component {
  state = {
    current: [],
  }

  handleChange(id){
    let current = this.props.venues.filter( d => d.id === id)
      this.setState(prevState => ({
        current: current[0]
      }))
      console.log(`this is current`, current)
  }

  render() {
  let allVenues = this.props.venues.map(d =>
    <VenueRow
    venueId2 = {this.props.venueId}
    venuePath={d}
    key={d.id}
    onClick = {(id) => this.handleChange(id)}
    />)
  return(
    <div className="allvenues">
      <div className='venue-list'>
      </div>
      <div className='venue-align'>
        <div className="venue-section">
          {allVenues}
        </div>

        <div className='venue-edit'>
          <VenueListingEditBox current = {this.state.current} { ...this.props }/>
          <div className='venue-map'>
            <Mapbox />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default VenueListings;
