import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../global'
import { Link } from 'react-router-dom'
import SneakerCard from './SneakerCard'
import { useState, useEffect } from 'react'
import '../styles/byBrand.css'


const SneakersByBrand = ({sneakers}) => {


  const { id } = useParams()
  const [ brand, setBrand ] = useState([])
 
  useEffect(() => {
		const getBrandName = async () => {
			const response = await axios.get(`${BASE_URL}brands/${id}`)
			setBrand(response.data.brand.brand)
      // console.log(response.data.brand.brand)
		}
		getBrandName()
	}, [id])

  const brandSneakers = sneakers.filter((sneaker) => {
    return sneaker.brand === id
  })
  

  

  return (
    <div>
      <h1>{brand}</h1>
      <div className='container-grid'>
      {brandSneakers.map((sneaker) => (
          <Link to={`/sneakers/${sneaker._id}`} >
            <SneakerCard
              key={sneaker.id}
              {...sneaker}
              image={sneaker.image}
              name={sneaker.name}
              price={sneaker.price}
            />
          </Link>
        ))}
        </div>
    </div>
  )
}

export default SneakersByBrand