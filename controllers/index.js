const { Sneaker, Brand } = require('../models');

const createSneaker = async (req, res) => {
	try {
		console.log(req.body)
		const sneaker = await new Sneaker(req.body);
		await sneaker.save();
		if (req.body.brand) {
			const brand = await Brand.findById(req.body.brand)
			brand.sneakers.push(sneaker._id);
			await brand.save();
		}

		return res.status(201).json({
			sneaker,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const createBrand = async (req, res) => {
	try {
		const brand = await new Brand(req.body);
		await brand.save();
		return res.status(201).json({
			brand,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const getAllBrands = async (req, res) => {
	try {
		const brands = await Brand.find();
		return res.status(200).json({ brands });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const getAllSneakers = async (req, res) => {
	try {
		const sneakers = await Sneaker.find();
		return res.status(200).json({ sneakers });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

// Get Brand & Sneaker by ID
const getBrandById = async (req, res) => {
	try {
		const { id } = req.params;
		const brand = await Brand.findById(id);
		if (brand) {
			return res.status(200).json({ brand });
		}
		return res.status(404).send('Brand with the specified ID does not exists');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const getSneakerById = async (req, res) => {
	try {
		const { id } = req.params;
		const sneaker = await Sneaker.findById(id);
		if (sneaker) {
			return res.status(200).json({ sneaker });
		}
		return res
			.status(404)
			.send('Sneaker with the specified ID does not exists');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const updateSneaker = async (req, res) => {
	try {
		const sneaker = await Sneaker.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(sneaker);
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const updateBrand = async (req, res) => {
	try {
		const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(brand);
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const deleteSneaker = async (req, res) => {
	try {
		const { id } = req.params;
		const deleted = await Sneaker.findByIdAndDelete(id);
		if (deleted) {
			return res.status(200).send('Sneaker deleted');
		}
		throw new Error('Sneaker not found');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports = {
	createSneaker,
	createBrand,
	getAllBrands,
	getAllSneakers,
	updateSneaker,
	updateBrand,
	deleteSneaker,
	getBrandById,
	getSneakerById,
};
