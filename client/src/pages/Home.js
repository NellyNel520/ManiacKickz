import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../global'
import BrandCard from '../components/BrandCard';
import logo from '../assets/logo.mp4'


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
    <div className='home'>
    <div className='video-header'>
      {/* <img alt="logo" src='https://i.postimg.cc/QdtYRT6b/Your-paragraph-text-1.png' /> */}
      <video src={logo} autoPlay loop muted/> 
    </div>
     
      <div className='content-container'>
        <div className='imgCont-container'>
          <img src='sds' />
        </div>
        <div className='container-cont'>
          <p>vhvubvhjbknkjn</p>
        </div>
      </div>
      <h1 className='headline'>What's Your Style?</h1>
      <div className='content-container'>
        <div className='imgCont-container'>
        <p>vhvubvhjbknkjn</p>
        </div>
        <div className='container-cont'>
        <img src='sds' />
        </div>
      </div>
      <div className='container-ft'>
        <div className='container-grid'>
          <div className='homeImage-cont'>
            <img src='' />
            <h4>product name</h4>
            <h5>$300</h5>
          </div>
          <div className='homeImage-cont'>
            <img src='' />
            <h4>product name</h4>
            <h5>$300</h5>
          </div>
          <div className='homeImage-cont'>
            <img src='' />
            <h4>product name</h4>
            <h5>$300</h5>
          </div>
        </div>
      </div>


      <div className='container-shopBrand'>
        <h1>Featured Brands</h1>
        {/* <p>we have something for eveyone</p> */}
        <section className='container-grid'>
          {brands.map((brand) => (
            <Link to={`brand/${brand._id}`} >
              <BrandCard
                key={brand.id}
                brand={brand.brand}
                image={brand.logo}
              />
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home