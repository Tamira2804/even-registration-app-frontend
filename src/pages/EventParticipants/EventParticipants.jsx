import React, { useState, useEffect } from 'react'
import ParticipantsList from 'components/ParticipantsList'
import { fetchEvent } from 'helpers/api'
import ParticipantsFilters from 'components/ParticipantsFilters'
import { filterParticipants } from 'helpers/filterParticipants'

import { Wrapper, Title } from './EventParticipants.styled'

const EventParticipants = ({ eventId }) => {
  const [event, setEvent] = useState(null)
  const [particіpants, setParticipants] = useState([])
  const [filteredParticipants, setFilteredParticipants] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventData = await fetchEvent(eventId)
        setEvent(eventData)
        setParticipants(eventData.participants)
        setFilteredParticipants(eventData.participants)
      } catch (error) {
        console.error('Error fetching event:', error)
      }
    }

    fetchData()
  }, [eventId])

  const handleFilterChange = (filterValues) => {
    const filtered = filterParticipants(particіpants, filterValues)
    setFilteredParticipants(filtered)
  }

  return (
    <Wrapper>
      {event ? (
        <>
          <Title>{event.title} participants</Title>

          {event.participants.length > 0 ? (
            <>
              <ParticipantsFilters setFilterValue={handleFilterChange} />
              <ParticipantsList participants={filteredParticipants} />
            </>
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
