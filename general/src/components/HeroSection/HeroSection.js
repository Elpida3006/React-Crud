import style from "./HeroSection.module.css";
import {Link} from 'react-router-dom';
function HeroSection() {
  return (
    <div className={style["Hero"]}>
      <div className={style["Container"]}>
        <h1 className={style["Hero__Title"]}>My Movie Collection</h1>
        <div className={style["Hero__Description"]}>The DC Extended Universe Is Coming to Sweep the Superhero Film Genre in 2022</div>
        <Link to="/Search" className={style["Hero__btn"]}>Search</Link>
      </div>
    </div>
  );
}
export default HeroSection;
