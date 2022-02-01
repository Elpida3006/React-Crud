const { Router } = require('express');
const router = Router();
const service = require('../services/productServise');

router.get('/', (req, res) => {
    res.redirect('/movies');
});

router.get('/favorites', (req, res, err) => {
    service.getFavorites()
        .then(favorites => {
            res.send(favorites)
        })
        .catch(err => console.error(`No articles yet`))
    
        
});
router.get('/movies', (req, res, err) => {
    service.getAll()
        .then(movies => {
            res.send(movies)
        })
        .catch(err => console.error(`No articles yet`))
    
        
});

router.get('/movies/movie-title/:id', (req, res, next) => {
    let articleId = req.params.id

console.log(articleId)
    service.getId(articleId)
        .then(article => {
            console.log(article);
            res.status(200).send(article)
        })
    .catch(error => {
        console.error(`details page not found`)
          
    });
});

router.get('/movies/addFavorite/:id',(req, res, next) =>{
    let movieId = req.params.id
    service.addFavorite(movieId)
        .then((article) => {
            res.status(200).send(article);
            console.log(`Add to Favorites`);
        })
        .catch(error => {
            console.error(`Do not Add to Favorites`)
        })
} );

router.get('/movies/removeFavorite/:id',(req, res, next) =>{
    let movieId = req.params.id
    service.removeFavorite(movieId)
        .then((article) => {
            res.status(200).send(article)
        })
        .catch(next)
} );

router.post('/movies/create', (req, res, err) => {
    console.log(req.body);
    service.createProduct(req.body)
        .then(movies => {
            res.send(movies)
        })
        .catch(err => console.error(`No articles yet`))
    
        
});
module.exports = router;