import logo from "./logo.svg";
import "./AllMovies.css";
import Layout from "./components/Layout/Layout";
import HeroSection from "./components/HeroSection/HeroSection";
import FavoritesSection from "./components/FavoritesSection/FavoritesSection";

function AllMovies() {
  return (
    // <body>
    <Layout>
      <HeroSection></HeroSection>
      <FavoritesSection></FavoritesSection>
    </Layout>
    // </body>
  );
}

export default AllMovies;
