import React from 'react'
import SneakerCard from '../components/SneakerCard'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../global'
import { Link } from 'react-router-dom'
import '../styles/Products.css'


const Products = () => {

  const [sneakers, setSneakers] = useState([])
  useEffect(() => {
    const getAllSneakers = async () => {
      const response = await axios.get(`${BASE_URL}sneakers`)
      setSneakers(response.data.sneakers)
      // console.log(response.data)
    }
    getAllSneakers()
  }, []) 
 

  return (
    <div>
    <div className='wrapper'>
      <div className='top'> kicks</div>
      <div className='bottom' aria-hidden="true"> Kicks</div>
    </div>
      {/* <h1>Current Listings</h1> */}
      <section className='container-grid'>
        {sneakers.map((sneaker) => (
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
      </section>
    </div>
  )
}

export default Products