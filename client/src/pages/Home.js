import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../global'
import BrandCard from '../components/BrandCard';
import logo from '../assets/logo.mp4'
import '../styles/home-headline.css'


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
          <img className="home-img2" src='https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/09/05/0151ef7e-edb5-11ea-8288-5c49f42eee5c_image_hires_193040.jpg?itok=ydapHfnB&v=1599344561' alt='sneaker' />
        </div>
        <div className='container-cont'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet tristique quam. Sed luctus faucibus efficitur. Cras a arcu id nunc facilisis tempus et vel ante. Praesent mauris lorem, tristique a posuere non, ullamcorper eu mi. Vivamus quis feugiat dolor. Curabitur placerat nunc vel massa ullamcorper, non rhoncus mi blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vel erat accumsan, pellentesque arcu sit amet, rutrum justo. Praesent at porta eros, in mollis massa.</p>
          <button>see More</button>
        </div>
      </div>

      <h1 className='headline'>What's Your Style?</h1>

      <div className='content-container'>
        <div className='container-cont'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet tristique quam. Sed luctus faucibus efficitur. Cras a arcu id nunc facilisis tempus et vel ante. Praesent mauris lorem, tristique a posuere non, ullamcorper eu mi. Vivamus quis feugiat dolor. Curabitur placerat nunc vel massa ullamcorper, non rhoncus mi blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vel erat accumsan, pellentesque arcu sit amet, rutrum justo. Praesent at porta eros, in mollis massa.</p>
        </div>
        <div className='imgCont-container'>
        <img className="home-img1" alt="sneaker" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQ8K9EK-dvPrZj17d5cHiv6v6UFUou3eaQw&usqp=CAU' />
        </div>
        
      </div>
      <div className='container-ft'>
        <div className='container-grid'>
          <div className='homeImage-cont'>
            <img src='https://images.unsplash.com/photo-1515555230216-82228b88ea98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MjU1ODMzN3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60' alt='sneaker' />
           
          </div>
          <div className='homeImage-cont'>
            <img src='https://images.unsplash.com/photo-1595460039423-2ab1dc7b3e36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGpvcmRhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' alt='sneaker' />
           
          </div>
          <div className='homeImage-cont'>
            <img src='https://images.unsplash.com/photo-1640251809451-e9f669695f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGpvcmRhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' alt='sneaker' />
            
          </div>

          <div className='homeImage-cont'>
            <img src='https://images.unsplash.com/photo-1675625500524-432cad136b10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQwfHxqb3JkYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='sneaker' />
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