import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'components/Container'
import EventsList from 'components/EventsList'
import SelectFilters from 'components/SelectFilters'
import { fetchAllEvents } from 'helpers/api'

import { Wrapper, Title } from './EventsBoard.styled'

const EventsBoard = () => {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [allEvents, setAllEvents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    if (fetching) {
      console.log('fetching')
      axios
        .get(`/events?page=${currentPage}&limit=8`)
        .then((res) => {
          console.log(res.data.events)
          setEvents((prevEvents) => [...prevEvents, ...res.data.events])
          setFilteredEvents((prevFilteredEvents) => [
            ...prevFilteredEvents,
            ...res.data.events,
          ])
          setCurrentPage((prevState) => prevState + 1)
          setTotalPages(res.data.totalPages)
        })
        .catch((err) => console.error(err))
        .finally(() => setFetching(false))
    }
  }, [fetching, currentPage])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  useEffect(() => {
    if (events.length === 0) {
      setFetching(true)
    }
  }, [events.length])

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        const allFetchedEvents = await fetchAllEvents()
        setAllEvents(allFetchedEvents)
      } catch (error) {
        console.error('Error fetching all events:', error)
      }
    }
    getAllEvents()
  }, [])

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      currentPage <= totalPages
    ) {
      setFetching(true)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Event Board</Title>
        <SelectFilters
          events={allEvents}
          setFilteredEvents={setFilteredEvents}
        />
        <EventsList eventsAll={filteredEvents} />
      </Wrapper>
    </Container>
  )
}

export default EventsBoard

/* Пагінація по сторінках */
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Container from 'components/Container'
// import EventsList from 'components/EventsList'

// import Pagination from 'components/Pagination'
// // import { Filters } from 'components/Filters'
// import SelectFilters from 'components/SelectFilters'
// // import { filterEvents } from 'helpers/filterEvents'

// import { Wrapper, Title } from './EventsBoard.styled'
// const EventsBoard = () => {
//   const [events, setEvents] = useState([])
//   const [filteredEvents, setFilteredEvents] = useState([])
//   const [currentPage, setCurrentPage] = useState(1)
//   const [eventsPerPage] = useState(8)

//   useEffect(() => {
//     axios
//       .get('/events')
//       .then((res) => {
//         console.log(res.data)
//         setEvents(res.data)
//         setFilteredEvents(res.data)
//       })
//       .catch((err) => console.error(err))
//   }, [])

//   // const handleFilterChange = (filterValues) => {
//   //   const newFilteredEvents = filterEvents(events, filterValues)
//   //   setFilteredEvents(newFilteredEvents)
//   //   setCurrentPage(1)
//   // }

//   const indexOfLastEvent = currentPage * eventsPerPage
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
//   const currentEvents = filteredEvents.slice(
//     indexOfFirstEvent,
//     indexOfLastEvent
//   )

//   return (
//     <Container>
//       <Wrapper>
//         <Title>Event Board</Title>
//         {/* <Filters setFilterValue={handleFilterChange} /> */}
//         <SelectFilters events={events} setFilteredEvents={setFilteredEvents} />
//         <EventsList eventsAll={currentEvents} />
//         <Pagination
//           events={filteredEvents}
//           eventsPerPage={eventsPerPage}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//         />
//       </Wrapper>
//     </Container>
//   )
// }

// export default EventsBoard
