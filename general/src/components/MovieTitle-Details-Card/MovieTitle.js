import style from "./MovieTitle.module.css";
import { Link, useParams } from "react-router-dom";
import * as service from "../../services/productService";
import { useEffect, useState } from "react";

function MovieTitle({ history }) {
  const { id } = useParams();

  const [product, setproduct] = useState({});

  useEffect(() => {
    service.getDetails(id).then((productsParams) => {
      setproduct(productsParams);
    });
  }, []);
  const addFavorites = () => {
    service.addFavorite(id).then(() => {
      history.push("/");
    });
  };
  // const removeFavorites = () => {
  //   service.removeFavorite(id).then(() => {
  //     history.push("/");
  //   });
  // };
  return (
    <Link to={`/movies/movie-title/${id}`} className={style["Product-Title"]}>
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
            to={`/movies/addFavorite/${id}`}
            onClick={addFavorites}
          >
            <button className={style["Btn-add"]}>Add to Favorites</button>
          </Link>
          {/* <Link
        //   className={style["Btn-remove"]}
          to={`/movies/removeFavorite/${match.params.id}`}
          onClick={removeFavorites}
        >
          <button className={style["Btn-remove"]}>Remove From Favorites</button>
        </Link> */}
        </div>
      </div>
    </Link>
  );
}
export default MovieTitle;
