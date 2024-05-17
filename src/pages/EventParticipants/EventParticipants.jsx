import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { Wrapper, Title, List, Item } from './EventParticipants.styled'

const EventParticipants = () => {
  const { eventId } = useParams()
  const [event, setEvent] = useState(null)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`/events/${eventId}`)
        setEvent(response.data)
      } catch (error) {
        console.error('Error fetching event:', error)
      }
    }

    fetchEvent()
  }, [eventId])

  return (
    <Wrapper>
      <Title>Event participants</Title>
      {event ? (
        event.participants.length > 0 ? (
          <List>
            {event.participants.map((participant, index) => (
              <Item key={index}>
                <p>{participant.name} </p>
                <p>{participant.email}</p>
              </Item>
            ))}
          </List>
        ) : (
          <p>There are no registered participants</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  )
}

export default EventParticipants
