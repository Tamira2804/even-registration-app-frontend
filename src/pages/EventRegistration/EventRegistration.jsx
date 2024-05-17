import React, { useEffect, useState } from 'react'
import RegistrationForm from 'components/RegistrationForm'
import { fetchEvent } from 'helpers/api'

import { Wrapper, Title } from './EventRegistration.styled'

const EventRegistration = ({ eventId }) => {
  const [event, setEvent] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventData = await fetchEvent(eventId)
        setEvent(eventData)
      } catch (error) {
        console.error('Error fetching event:', error)
      }
    }

    fetchData()
  }, [eventId])

  return (
    <Wrapper>
      {event ? (
        <>
          <Title>{event.title} registration</Title>

          <RegistrationForm eventId={eventId} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  )
}

export default EventRegistration
