const router = require('express').Router();


const { addMedia , getMedias , searchMedia , getMedia , deleteMedia , updateMedia} = require('../media/controller');




router.post('/' ,  addMedia)

router.patch( '/:id' , updateMedia );

router.get('/' ,  getMedias)

router.delete('/:id' ,  deleteMedia)

router.get('/search' ,    searchMedia)

router.get('/:id',  getMedia)

module.exports = router;