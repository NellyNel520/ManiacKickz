const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')
const { Sneaker } = require('../models')

// Test
router.get('/', (req, res) => res.send('This is root!'))

// Get All (Read)
router.get('/sneakers', controllers.getAllSneakers)
router.get('/brands', controllers.getAllBrands)

//Get brand by id
router.get('/brands/:id', controllers.getBrandById)
router.get('/sneakers/:id', controllers.getBrandById)

// POST (Create)
router.post('/sneaker', controllers.createSneaker)
router.post('/brand', controllers.createBrand)





//Update sneaker***
router.put('/updateSneaker/:id', controllers.updateSneaker)

// delete sneaker***
router.delete('/deleteSneaker/:id', controllers.deleteSneaker)

module.exports = router