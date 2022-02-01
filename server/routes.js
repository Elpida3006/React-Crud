const { Router } = require('express');

const productController = require('./controllers/productController');

const router = Router();


router.use('/', productController);


// router.get('*', (req, res) => {
//     res.render('404');
// });

module.exports = router;