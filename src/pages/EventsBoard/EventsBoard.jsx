import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'components/Container'
import EventsList from 'components/EventsList'

import Pagination from 'components/Pagination'
// import { Filters } from 'components/Filters'
import SelectFilters from 'components/SelectFilters'
// import { filterEvents } from 'helpers/filterEvents'

import { Wrapper, Title } from './EventsBoard.styled'

const EventsBoard = () => {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [eventsPerPage] = useState(8)

  useEffect(() => {
    axios
      .get('/events')
      .then((res) => {
        console.log(res.data)
        setEvents(res.data)
        setFilteredEvents(res.data)
      })
      .catch((err) => console.error(err))
  }, [])

  const handleEventUpdate = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event._id === updatedEvent._id ? updatedEvent : event
    )
    setEvents(updatedEvents)
    setFilteredEvents(updatedEvents)
  }

  // const handleFilterChange = (filterValues) => {
  //   const newFilteredEvents = filterEvents(events, filterValues)
  //   setFilteredEvents(newFilteredEvents)
  //   setCurrentPage(1)
  // }

  const indexOfLastEvent = currentPage * eventsPerPage
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  )

  return (
    <Container>
      <Wrapper>
        <Title>Event Board</Title>
        {/* <Filters setFilterValue={handleFilterChange} /> */}
        <SelectFilters events={events} setFilteredEvents={setFilteredEvents} />
        <EventsList
          eventsAll={currentEvents}
          onEventUpdate={handleEventUpdate}
        />
        <Pagination
          events={filteredEvents}
          eventsPerPage={eventsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Wrapper>
    </Container>
  )
}

export default EventsBoard
