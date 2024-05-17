import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import {
  FormWrapper,
  Input,
  CheckboxRow,
  Button,
} from './RegistrationForm.styled'

const RegistrationForm = ({ eventId }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    source: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`/events/${eventId}/register`, {
        ...formData,
      })
      alert('Registration successfully completed!')
      navigate(-1)
    } catch (err) {
      console.error(err)
      alert('Error occurred during registration.')
    }
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='name'
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type='date'
          name='dob'
          placeholder='Date of Birth'
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <p>Where did you hear about this event?</p>
        <CheckboxRow>
          <div>
            <input
              type='radio'
              id='socialMedia'
              name='source'
              value='Social media'
              onChange={handleChange}
            />
            <label htmlFor='socialMedia'>Social media</label>
          </div>
          <div>
            <input
              type='radio'
              id='friends'
              name='source'
              value='Friends'
              onChange={handleChange}
            />
            <label htmlFor='friends'>Friends</label>
          </div>
          <div>
            <input
              type='radio'
              id='foundMyself'
              name='source'
              value='Found myself'
              onChange={handleChange}
            />
            <label htmlFor='foundMyself'>Found myself</label>
          </div>
        </CheckboxRow>
        <Button type='submit'>Submit</Button>
      </form>
    </FormWrapper>
  )
}

export default RegistrationForm
