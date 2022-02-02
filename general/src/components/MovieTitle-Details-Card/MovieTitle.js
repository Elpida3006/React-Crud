import style from "./MovieTitle.module.css";
import { Link, useParams } from "react-router-dom";
import * as service from "../../services/productService";
import { useEffect, useState } from "react";
import Rate from 'rc-rate';


function MovieTitle({ history }) {
  const { id } = useParams();

  const [product, setproduct] = useState({});

  useEffect(() => {
    service.getDetails(id).then((productsParams) => {
      setproduct(productsParams);
    });
  }, []);
  let isFavorite = false;

  // console.log(product.favorite.length)
  const array = product.favorite
  // if(array.includes(id))
  // {
  //   isFavorite = true;
  //   console.log(isFavorite);
  // } else {

  //   console.log('false')
  // }





  const addFavorites = () => {
    service.addFavorite(id).then(() => {
      history.push("/");
    });
  };
  const removeFavorites = () => {
    service.removeFavorite(id).then(() => {
      history.push("/");
    });
  };
  return (

    <div className={style["Product-Title"]}>
      <div className={style["MovieCard"]}>
        <img
          src={product.imageUrl}
          className={style["Product-Img"]}
          type="text"
          name="imageUrl"
          alt=""
          placeholder="Image url..."
        />
        <div className={style["Product-Content"]}>
          <h1 className={style["Product-Title"]} name="title">
            {product.title}
          </h1>
          <p className={style["Product-Desciption"]} name="shortDescription">
            {product.shortDescription}
          </p>
          <p className={style["Product-Desciption"]} name="description">
            {product.description}
          </p>
          <Link
            //   className={style["Btn-add"]}
            to={`/`}
            onClick={addFavorites}
          >
            <button className={style["Btn-add"]}>Add to Favorites</button>
          </Link>
          <Link
            //   className={style["Btn-remove"]}
            to={`/`}
            onClick={removeFavorites}
          >
            <button className={style["Btn-remove"]}>Remove From Favorites</button>
          </Link>
        </div>
      </div>
      <div>
        <h1 className={style["Review"]}>Your Review</h1>
        <Rate />
        <textarea className={style["Review__textarea"]} placeholder="Your private notes and comments about the movie...">
        </textarea>
      </div>
    </div>




  );
}
export default MovieTitle;
