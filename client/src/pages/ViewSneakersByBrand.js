import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../global'
import SneakerCard from '../components/SneakerCard'



const ViewSneakersByBrand = () => {

    const [sneakers, setSneakers] = useState([])
    let { brandID } = useParams()

    useEffect(() => {
        let isCancelled = false
        const getSneakersByBrand = async () => {
            const response = await axios.get(`${BASE_URL}`)
        }
    })

  return (
    <div>ViewSneakersByBrand</div>
  )
}

export default ViewSneakersByBrand