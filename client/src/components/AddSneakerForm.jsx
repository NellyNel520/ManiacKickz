import React from 'react'
import { useState } from 'react'

const AddSneakerForm = (props) => {
    const initialState = {
        issueType: '',
        subject: '',
        message: ''
    }
    const [formState, setFormState] = useState(initialState)

    const handleChange = (event) => {
	    setFormState({...formState, [event.target.id]: event.target.value })
	}
    

  return (
    <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="brandName">Brand:</label>
        <input type="text" id="brandName" />
        <label htmlFor="image">Image:</label>
        <input type="text" id="image" />
        <label htmlFor="colorWay">Colorway:</label>
        <input type="text" id="colorWay" />
        <label htmlFor="releaseDate">Release Date:</label>
        <input type="text" id="releaseDate" />
        <label htmlFor="price">Price: $</label>
        <input type="text" id="price" />
        <label htmlFor="styleCode">Style Code:</label>
        <input type="text" id="styleCode" />


        <button type='submit'>Submit</button>
    </form>
  )
}

export default AddSneakerForm