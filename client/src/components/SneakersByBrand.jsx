import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SneakerCard from './SneakerCard'


const SneakersByBrand = ({sneakers}) => {
  const { id } = useParams()
  const brandSneakers = sneakers.filter((sneaker) => {
    return sneaker.brand === id
  })
  // console.log(sneakers[0])
  return (
    <div>
      <h1>Brand Name</h1>
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