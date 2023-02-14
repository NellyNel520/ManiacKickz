import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../global'
import BrandCard from '../components/BrandCard';


const Home = () => {

  const [brands, setBrands] = useState([])
  useEffect(() => {
    const getAllBrands = async () => {
      const response = await axios.get(`${BASE_URL}brands`)
      setBrands(response.data.brands)
      console.log(response.data)
    }
    getAllBrands()
  }, []) 


  return (
    <div>
      <div className='container'>
        <h2>Shop by Brand</h2>
        <section className='container-grid'>
          {brands.map((brand) => (
              <BrandCard
                key={brand.id}
                brand={brand.brand}
                image={brand.logo}
              />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home