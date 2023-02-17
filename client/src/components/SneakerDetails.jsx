import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../global'
import moment from 'moment'
import '../styles/details.css'

const SneakerDetails = (props) => {
	const [sneaker, setSneaker] = useState('')

	let { id } = useParams()
	let navigate = useNavigate()
	console.log(id)

	useEffect(() => {
		const getSneakerById = async () => {
			const response = await axios.get(`${BASE_URL}sneakers/${id}`)
			console.log(response.data.sneaker)
			setSneaker(response.data.sneaker)
		}
		getSneakerById()
	}, [id])
	console.log(sneaker)

	let releaseDate = moment(sneaker.releaseDate).format('MMM DD, YYYY')

	const deleteSneaker = async () => {
		const response = await axios.delete(`${BASE_URL}deleteSneaker/${id}`)
		console.log(response)
        window.alert('Success!')
		navigate('/sneakers')
	}

	return sneaker ? (
		<div className="details">
			<h1>{sneaker.name}</h1>
			<h3>{releaseDate}</h3>
			<div className="img-container">
				<img src={sneaker.image} alt={sneaker.name} />
			</div>
			<div className="sneakerInfo-wrapper">
				<div className="wrapper2">
					<div>
						<h3>Name</h3>
					</div>
					<div>
						<h3>{sneaker.name}</h3>
					</div>
					<div>
						<h3>Brand</h3>
					</div>
					<div>
						<h3>{sneaker.brandName}</h3>
					</div>
					<div>
						<h3>Colorway</h3>
					</div>
					<div>
						<h3>{sneaker.colorWay}</h3>
					</div>
					<div>
						<h3>Release Date</h3>
					</div>
					<div>
						<h3>{releaseDate}</h3>
					</div>
					<div>
						<h3>Style Code</h3>
					</div>
					<div>
						<h3>{sneaker.styleCode}</h3>
					</div>
					<div>
						<h3>Retail Price</h3>
					</div>
					<div>
						<h3>${sneaker.price}.00</h3>
					</div>
				</div>
			</div>
			<div>
				<Link to={`/sneakers/update/${sneaker._id}`}>
					<button>update</button>
				</Link>

				<Link to={'/sneakers'}>
					<button>Back</button>
				</Link>

				<button onClick={deleteSneaker}>Delete</button>
			</div>
		</div>
	) : null
}

export default SneakerDetails
