import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import {
  FormWrapper,
  StyledForm,
  Input,
  CheckboxRow,
  Button,
} from './RegistrationForm.styled'
import ErrorComponent from 'components/ErrorComponent'

const initialValues = {
  name: '',
  email: '',
  dob: '',
  source: '',
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  dob: Yup.date()
    .max(new Date(), 'Date of Birth cannot be in the future')
    .required('Date of Birth is required'),
  source: Yup.string().required('Please select a source'),
})

const RegistrationForm = ({ eventId, onClose }) => {
  const navigate = useNavigate()
  const [isFormValid, setIsFormValid] = useState(false)

  const handleValidation = async (values) => {
    try {
      await validationSchema.validate(values, { abortEarly: false })
      setIsFormValid(true)
    } catch (error) {
      setIsFormValid(false)
    }
  }

  const handleSubmit = async (values) => {
    try {
      await axios.post(`/events/${eventId}/register`, values)
      alert('Registration successfully completed!')
      // navigate(-1)
      onClose()
    } catch (err) {
      console.error(err)
      alert('Error occurred during registration.')
    }
  }

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validate={handleValidation}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <div>
              <label htmlFor='name'>Name</label>
              <Input
                id='name'
                type='text'
                name='name'
                placeholder='John Doe'
                error={touched.name && errors.name ? 1 : 0}
                valid={touched.name && !errors.name ? 1 : 0}
              />
              <ErrorComponent name='name' />
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <Input
                id='email'
                type='email'
                name='email'
                placeholder='email@example.com'
                error={touched.email && errors.email ? 1 : 0}
                valid={touched.email && !errors.email ? 1 : 0}
              />
              <ErrorComponent name='email' />
            </div>

            <div>
              <label htmlFor='dob'>Date of Birth</label>
              <Input
                id='dob'
                type='date'
                name='dob'
                error={touched.dob && errors.dob ? 1 : 0}
                valid={touched.dob && !errors.dob ? 1 : 0}
              />
              <ErrorComponent name='dob' />
            </div>

            <p>Where did you hear about this event?</p>
            <CheckboxRow>
              <div>
                <Input
                  type='radio'
                  id='socialMedia'
                  name='source'
                  value='Social media'
                />
                <label htmlFor='socialMedia'>Social media</label>
              </div>
              <div>
                <Input
                  type='radio'
                  id='friends'
                  name='source'
                  value='Friends'
                />
                <label htmlFor='friends'>Friends</label>
              </div>
              <div>
                <Input
                  type='radio'
                  id='foundMyself'
                  name='source'
                  value='Found myself'
                />
                <label htmlFor='foundMyself'>Found myself</label>
              </div>
            </CheckboxRow>
            <ErrorMessage name='source' />

            <Button type='submit' disabled={!isFormValid}>
              Submit
            </Button>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  )
}

export default RegistrationForm
