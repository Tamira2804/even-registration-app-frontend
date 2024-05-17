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
