const Movie = require("../models/Movie");

function getAll() {
  return Movie.find().populate("favorite");
}
function getFavorites() {
  const favorites = Movie.$where('this.favorite !== -1').populate("favorite");
  // console.log(favorites);
  return favorites;
}

function addFavorite(movieId) {
  console.log(movieId);
  console.log(`its a fetch ${movieId}`);
  return Movie.updateOne({ _id: movieId }, { $push: { favorite: movieId } });
}
function removeFavorite(movieId) {
  console.log(movieId);
  console.log(`its a fetch ${movieId}`);
  return Movie.updateOne({ _id: movieId }, { $pull: { favorite: movieId } });
}
function getId(id) {
  console.log(id);
  return Movie.findById({ _id: id });
}
function createProduct(data) {
  console.log(data);
  return Movie.create({ ...data })

}
module.exports = {
  getAll,
  getFavorites,
  addFavorite,
  removeFavorite,
  getId,
  createProduct,
};
