import React from 'react'
import { useState } from 'react'

const AddSneakerForm = (props) => {
    const initialState = {
        issueType: '',
        subject: '',
        message: ''
      }
      const [formState, setFormState] = useState(initialState)
    

  return (
    <form>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default AddSneakerForm