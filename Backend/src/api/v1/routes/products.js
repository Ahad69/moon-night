const router = require('express').Router();


const { addProduct , getProducts , searchProduct , getProduct , deleteProduct , updateProduct} = require('../product/controller');




router.post('/' ,  addProduct)

router.patch( '/:id' , updateProduct );

router.get('/' ,  getProducts)

router.delete('/:id' ,  deleteProduct)

router.get('/search' ,    searchProduct)

router.get('/:id',  getProduct)

module.exports = router;