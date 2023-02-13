import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../global'
import SneakerCard from '../components/SneakerCard'



const ViewSneakersByBrand = () => {

    const [sneakers, setSneakers] = useState([])
    let { brandId } = useParams()

    useEffect(() => {
        let isCancelled = false
        const getSneakersByBrand = async () => {
            const response = await axios.get(`${BASE_URL}brands/:id`)
            if (!isCancelled) {
                setSneakers(response.data.sneakers)
            }
        }
        getSneakersByBrand()
        return () => {
            isCancelled = true
        }
    }, [brandId])

  return (
    <div>
        <h2>{brandId.brand}</h2>
        <div className='container-grid'>
            {sneakers.map((sneaker) => (
                <SneakerCard 
                    key={sneaker.id}
                    image={sneaker.image}
                    name={sneaker.name}
                    price={sneaker.price}
                    {...sneaker}
                />
            ))}
        </div>
    </div>
  )
}

export default ViewSneakersByBrand