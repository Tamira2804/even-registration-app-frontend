import React from 'react'
import { formatDate } from 'helpers/formatDate'

import { useNavigate } from 'react-router-dom'
import {
  CardThumb,
  Title,
  Descr,
  BtnWrapper,
  StyledLink,
  Btn,
} from './EventItem.styled'

const EventItem = ({ event, onEventUpdate }) => {
  const navigate = useNavigate()
  const formattedDate = formatDate(event.date)

  const handleViewParticipants = async () => {
    navigate(`/${event._id}/participants`)
  }

  return (
    <CardThumb>
      <Title>{event.title}</Title>
      <Descr>{event.description}</Descr>
      <p>{event.organizer}</p>
      <p>{formattedDate}</p>
      <BtnWrapper>
        <StyledLink to={`/${event._id}/register`}>Registration</StyledLink>
        <Btn onClick={handleViewParticipants}>View</Btn>
      </BtnWrapper>
    </CardThumb>
  )
}

export default EventItem
