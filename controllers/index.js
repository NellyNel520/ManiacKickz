const { Sneaker, Brand } = require('../models')


const createSneaker = async (req, res) => {
    try {
        const sneaker = await new Sneaker(req.body)
        await sneaker.save()
        return res.status(201).json({
            sneaker,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createBrand = async (req, res) => {
    try {
        const brand = await new Brand(req.body)
        await brand.save()
        return res.status(201).json({
            brand,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find()
        return res.status(200).json({ brands })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllSneakers = async (req, res) => {
    try {
        const sneakers = await Sneaker.find()
        return res.status(200).json({ sneakers })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    createSneaker,
    createBrand,
    getAllBrands,
    getAllSneakers
}