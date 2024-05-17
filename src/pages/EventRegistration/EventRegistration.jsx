import React from 'react'
import { useParams } from 'react-router-dom'
import RegistrationForm from 'components/RegistrationForm'

import { Wrapper, Title } from './EventRegistration.styled'

const EventRegistration = () => {
  const { eventId } = useParams()

  return (
    <Wrapper>
      <Title>Event Registration</Title>
      <RegistrationForm eventId={eventId} />
    </Wrapper>
  )
}

export default EventRegistration
