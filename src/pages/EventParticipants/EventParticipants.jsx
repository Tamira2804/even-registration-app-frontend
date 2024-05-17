import React, { useState, useEffect } from 'react'
import ParticipantsList from 'components/ParticipantsList'
import { fetchEvent } from 'helpers/api'

import { Wrapper, Title } from './EventParticipants.styled'

const EventParticipants = ({ eventId }) => {
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
          <Title>{event.title} participants</Title>
          {event.participants.length > 0 ? (
            <ParticipantsList participants={event.participants} />
          ) : (
            <p>There are no registered participants</p>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  )
}

export default EventParticipants
