import style from "./Details.module.css";
import Layout from "../../components/Layout/Layout";
import MovieTitle from "../../components/MovieTitle-Details-Card/MovieTitle";

function Details() {
  return (
    <Layout>
      <section className={style["MovieTitle__Details"]}>
        <MovieTitle></MovieTitle>
      </section>
    </Layout>
  );
}

export default Details;
