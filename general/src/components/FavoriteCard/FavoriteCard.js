import style from "./FavoriteCard.module.css";
import { Link } from "react-router-dom";

function FavoriteCard({
  _id: id,
  imageUrl,
  nameProduct,
  shortDescription,
  description,
  siteLink,
  likeRate,
  comments,
}) {
  return (
  
      <Link to={`/movies/movie-title/${id}`}>
        <div className={style["FavoriteCard"]}>

        <img
          src={imageUrl}
          className={style["Product-Img"]}
          type="text"
          name="imageUrl"
          alt="image crashed"
     
        />
        </div>
      </Link>
 
  );
}
export default FavoriteCard;
