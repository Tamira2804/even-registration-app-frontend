import axios from 'axios'

export const fetchEvent = async (eventId) => {
  try {
    const response = await axios.get(`/events/${eventId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching event:', error)
    throw error
  }
}

export const fetchAllEvents = async () => {
  let allEvents = []
  let currentPage = 1
  let totalPages = 1

  try {
    while (currentPage <= totalPages) {
      const response = await axios.get(`/events?page=${currentPage}&limit=8`)
      allEvents = [...allEvents, ...response.data.events]
      totalPages = response.data.totalPages
      currentPage += 1
    }
    console.log('fetchAllEvents', allEvents)
    return allEvents
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}
