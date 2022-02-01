const homeurl = 'http://localhost:3002/api/movies';
const favoriteUrl = 'http://localhost:3002/api/favorites';
export const getFavorite = () => {
     return fetch(favoriteUrl)
        .then(res => res.json())
        .catch(err => console.log(err));
};
export const getAll = () => {
    return fetch(homeurl)
       .then(res => res.json())
       .catch(err => console.log(err));
};
export const getDetails = (productId) => {
  console.log(productId);
    return fetch(`${homeurl}/movie-title/${productId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const addFavorite = (productId) => {
    // console.log(`${homeurl}/edit/${productId}`);
    // console.log(userId);

    return fetch(`${homeurl}/addFavorite/${productId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    })
        .then(res => res.json())
        .catch(error => console.log(error));
};
export const removeFavorite = (productId) => {
    // console.log(`${homeurl}/edit/${productId}`);
    // console.log(userId);
    return fetch(`${homeurl}/removeFavorite/${productId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        // body: JSON.stringify({userId})
    })
        .then(res => res.json())
        .catch(error => console.log(error));
};