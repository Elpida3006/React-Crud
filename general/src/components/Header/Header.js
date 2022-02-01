import React from "react";
import style from "./Header.module.css";
import {Link} from'react-router-dom';

function Header() {
  return (
    <header className={style["Header"]}>
      <div className={style["Container"]}>
      <Link to="/" className={style["Header__Title"]}>My Movie Collection</Link>
        <div className={style["Header__Search"]}>
          <input className={style["Header__Input"]} placeholder="Search by Movie Title.." type="text" />
          <button  className={style["Header__btn"]}>Search</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
