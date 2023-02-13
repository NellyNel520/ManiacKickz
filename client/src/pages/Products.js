import React from 'react'
import SneakerCard from '../components/SneakerCard'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../global'


const Products = () => {

  const [sneakers, setSneakers] = useState([])
  useEffect(() => {
    const getAllSneakers = async () => {
      const response = await axios.get(`${BASE_URL}sneakers`)
      setSneakers(response.data.sneakers)
      console.log(response.data)
    }
    getAllSneakers()
  }, []) 
 

  return (
    <div>
      <h3>Current Listings</h3>
      <section className='container-grid'>
        {sneakers.map((sneaker) => (
          <SneakerCard
            key={sneaker.id}
            image={sneaker.image}
            name={sneaker.name}
            price={sneaker.price}
            {...sneaker}
          />
        ))}
      </section>
    </div>
  )
}

export default Products