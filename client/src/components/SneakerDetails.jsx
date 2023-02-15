import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../global'
import moment from 'moment';
import { Link } from 'react-router-dom'

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

    let releaseDate = moment(sneaker.releaseDate).format('MMM DD, YYYY')


  return sneaker ? (
    <div className='details'>
        <h1>{sneaker.name}</h1>
        <h3>{releaseDate}</h3>
        <div className='img-container'>
            <img src={sneaker.image} alt={sneaker.name} />
        </div>
        <div className='sneakerInfo-wrapper'>
            <div className='wrapper2'>
                    <div><h3>Name</h3></div>
                    <div><h3>{sneaker.name}</h3></div>
                    <div><h3>Colorway</h3></div>
                    <div><h3>{sneaker.colorWay}</h3></div>
                    <div><h3>Release Date</h3></div>
                    <div><h3>{releaseDate}</h3></div>
                    <div><h3>Style Code</h3></div>
                    <div><h3>{sneaker.styleCode}</h3></div>
                    <div><h3>Retail Price</h3></div>
                    <div><h3>${sneaker.price}.00</h3></div>
            </div>
        </div>
        <div>
        <Link to={'/sneakers'}>
            <button>Back</button>
        </Link>
        </div>
    </div>
  ) : null
}

export default SneakerDetails