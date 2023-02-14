import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../global'

const SneakerDetails = (props) => {
    const [sneaker, setSneaker] = useState('')

    let { id } = useParams()
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


  return sneaker ? (
    <div className='details'>
        <h1>{sneaker.name}</h1>
        <h3>{sneaker.releaseDate}</h3>
        <div className='img-container'>
            <img src={sneaker.image} alt={sneaker.name} />
        </div>
        <div className='info-wrapper'>
            <h3></h3>
        </div>

    </div>
  ) : null
}

export default SneakerDetails