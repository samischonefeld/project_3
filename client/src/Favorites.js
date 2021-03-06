import React, { Component } from 'react';
import axios from 'axios';
import FavoritesCard from './FavoritesCard.js';

class Favorites extends Component{
state = {
  fav: []
}
  componentDidMount() {
    axios.get(`/favorites/${this.props.match.params.id}`)
    .then(res=> {
      this.setState(preState => ({
        fav: res.data.data
      }))
      console.log(this.state.fav)
    })
  }

  render(){
    const allFavorites = this.state.fav.map((favorites) => {
      return(
          <FavoritesCard
          {...this.props}
          favorites={favorites}
          key = {favorites.id}
          />
        )
    })
    return(
  <div>
    <h1> YOUR PLACES</h1>
    <div className='favorites-container'>
      {allFavorites}
    </div>
  </div>
      )
  }
}

export default Favorites;
