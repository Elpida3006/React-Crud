import style from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import * as service from '../../services/productService';
import { useEffect, useState } from "react";


function MovieCard({
  history,
  _id: id,
  imageUrl,
  title,
  shortDescription,
  description,
  siteLink,
  likeRate,
  favorite,
}) {
  const [product, setproduct] = useState({});

  useEffect(() => {
    service.getDetails(id).then((productsParams) => {
      setproduct(productsParams);
    });
  }, []);
    const addFavorites = (id) => {
        service.addFavorite(id).then(() => {
             history.push('/');
        });
    };
    const removeFavorites = (e, id) => {
        service.removeFavorite(id).then(() => {
             history.push('/');
        });
    };

    
  return (
    <div className={style["MovieCard"]}>
         <Link to={`/movies/movie-title/${id}`} className={style["Product-Title"]}>
        <img
          src={imageUrl}
          className={style["Product-Img"]}
          type="text"
          name="imageUrl"
          alt=""
       
          
        />
         </Link>
        <div className={style["Product-Content"]}>

        <h1 className={style["Product-Title"]} name="title"   >
      {title}
        </h1>
        <p className={style["Product-Desciption"]} name="shortDescription">{shortDescription}</p>
        <p className={style["Product-Desciption"]} name="description">
      {description}
        </p>
       
        <Link
        //   className={style["Btn-remove"]}
          to={`/`} 
          onClick={addFavorites(id)} 
             >
          <button className={style["Btn-add"]}>Add to Favorites</button>
          </Link>
        <Link
        //   className={style["Btn-remove"]}
          to={`/`}
          onClick={removeFavorites(id)}
        >
          <button className={style["Btn-remove"]}>Remove From Favorites</button>
        </Link>
        </div>
      </div>
 
  );
}
export default MovieCard;
