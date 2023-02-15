import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'

const UpdateSneakerForm = (props) => {
	let { id } = useParams()
	let navigate = useNavigate()
	const [formState, setFormState] = useState({})

	const findSneaker = () => {
		let foundSneaker = props.sneakers.filter((sneaker) => {
			return sneaker._id === id
		})
		setFormState(foundSneaker[0])
	}
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		let newSneaker = {
			name: formState.name,
			brandName: formState.brandName,
			colorWay: formState.colorWay,
			releaseDate: formState.releaseDate,
			styleCode: formState.styleCode,
			price: formState.price
		}
		await axios.put(`${BASE_URL}updateSneaker/${formState._id}`, newSneaker)
		setFormState({})
		navigate('/sneakers')
		// props.getAllSneakers()
	}
	useEffect(() => {
		findSneaker()
	}, [])

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				id="name"
				onChange={handleChange}
				value={formState.name}
			/>
			<label htmlFor="brandName">Brand:</label>
			<input
				type="text"
				id="brandName"
				onChange={handleChange}
				value={formState.brandName}
			/>
			<label htmlFor="image">Image:</label>
			<input
				type="text"
				id="image"
				onChange={handleChange}
				value={formState.image}
			/>
			<label htmlFor="colorWay">Colorway:</label>
			<input
				type="text"
				id="colorWay"
				onChange={handleChange}
				value={formState.colorWay}
			/>
			<label htmlFor="releaseDate">Release Date:</label>
			<input
				type="text"
				id="releaseDate"
				onChange={handleChange}
				value={formState.releaseDate}
			/>
			<label htmlFor="price">Price: $</label>
			<input
				type="number"
				id="price"
				onChange={handleChange}
				value={formState.price}
			/>
			<label htmlFor="styleCode">Style Code:</label>
			<input
				type="text"
				id="styleCode"
				onChange={handleChange}
				value={formState.styleCode}
			/>

			<label htmlFor="sizes">Size(s):</label>
			<input
				type="text"
				id="sizes"
				onChange={handleChange}
				value={formState.sizes}
			/>

			<button type="submit">Submit</button>
		</form>
	)
}

export default UpdateSneakerForm
