import React, {Component} from 'react';
import style from "./FavoritesSection.module.css";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import {getFavorite} from '../../services/productService';

class  FavoritesSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
    };
  };
  componentDidMount(){

    getFavorite()
      .then(res => this.setState({ products: res }))
      .catch(error => console.log(error));

  }
  render() {
    const products = this.state.products;

  return (
    <div className={style["Favorites"]}>
        <h1 className={style["Favorites__Title"]}>Your Favorites</h1>
      <div className={style["Container"]}>
        {(products.length) ? products.map(c => 
        <FavoriteCard key={c.id} {...c} />
        ) : 
        <p>No Movies!</p> 
      } 
   
      </div>
    </div>
    
  );
};
}
export default FavoritesSection;
