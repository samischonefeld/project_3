import React from 'react';

function VenueRow(props){

  function favoriteVenue(id){
    props.onClick(id)
    console.log(`this is id`, id)
  }


    return(
      <div className="venue-container">
          <p class='venue-name'>{props.venuePath.name}</p>
          <div className="venue-container-footer">
          <div className='div-address'>
            <p className='venue-address'>{props.venuePath.location.address}</p>
            <div className='line-bar'></div>
            </div>
          <button
          className = 'venue-favorite'
          onClick = {() => favoriteVenue(props.venuePath.id)}
          > Favorite</button>
        </div>
      </div>
      )
  }

export default VenueRow
// src={`${this.state.prefix}${this.state.size}${this.state.suffix}`}

//Removed from above:
  // state = {
  // venueId: this.props.venuePath.id,
  // size: '36x36',
  // }

  // componentDidMount() {
  //   let url = `https://api.foursquare.com/v2/venues/${this.state.venueId}/photos?client_id=ST23AEQHHZXZSAVCBLBO4KZQZVA0KXNULNFPAVHFKMJLZ0OY&client_secret=NN3W2M14CHEJ2BCF21ORXCWWA5VYMXAWQYXTWG5414LU2RX0&v=20180323`
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(res => {
  //     this.setState({
  //       prefix: res.response.photos.items[0].prefix,
  //       suffix: res.response.photos.items[0].suffix
  //     })
  //     console.log(res)
  //     console.log(this.state.prefix)
  //     console.log(this.state.size)
  //     console.log(this.state.suffix)
  //     console.log(`${this.state.prefix}${this.state.size}${this.state.suffix}`)
  //   })
  // }
