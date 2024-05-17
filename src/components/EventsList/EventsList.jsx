import React from 'react'
import { List } from './EventsList.styled'
import EventItem from 'components/EventItem'

const EventsList = ({ eventsAll, onEventUpdate }) => {
  return (
    <List>
      {eventsAll.map((event) => (
        <EventItem
          key={event._id}
          event={event}
          onEventUpdate={onEventUpdate}
        />
      ))}
    </List>
  )
}

export default EventsList
