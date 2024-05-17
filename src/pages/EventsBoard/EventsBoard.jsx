import React, { useState, useEffect } from 'react'
import Container from 'components/Container'
import { Wrapper, Title, Pagination, PageButton } from './EventsBoard.styled'
import EventsList from 'components/EventsList'
import axios from 'axios'

const EventsBoard = () => {
  const [events, setEvents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [eventsPerPage] = useState(8)

  useEffect(() => {
    axios
      .get('/events')
      .then((res) => {
        console.log(res.data)
        setEvents(res.data)
      })
      .catch((err) => console.error(err))
  }, [])

  const handleEventUpdate = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event._id === updatedEvent._id ? updatedEvent : event
    )
    setEvents(updatedEvents)
  }

  const indexOfLastEvent = currentPage * eventsPerPage
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent)

  const totalPages = Math.ceil(events.length / eventsPerPage)

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Event Board</Title>
        <EventsList
          eventsAll={currentEvents}
          onEventUpdate={handleEventUpdate}
        />
        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <PageButton
                key={pageNumber}
                onClick={() => paginate(pageNumber)}
                className={currentPage === pageNumber ? 'active' : ''}
              >
                {pageNumber}
              </PageButton>
            )
          )}
        </Pagination>
      </Wrapper>
    </Container>
  )
}

export default EventsBoard
