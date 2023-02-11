const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')


router.get('/', (req, res) => res.send('This is root!'))
router.get('/sneakers', controllers.getAllSneakers)
router.get('/brands', controllers.getAllBrands)

router.post('/sneaker', controllers.createSneaker)
router.post('/brand', controllers.createBrand)


module.exports = router