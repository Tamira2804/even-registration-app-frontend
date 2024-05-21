import React, { useState } from 'react'
import { formatDate } from 'helpers/formatDate'
// import { useNavigate } from 'react-router-dom' // page version
import Modal from '../Modal'
import EventRegistration from 'pages/EventRegistration'
import EventParticipants from 'pages/EventParticipants'

import {
  CardThumb,
  Title,
  Descr,
  BtnWrapper,
  // StyledLink,  // page version
  Btn,
} from './EventItem.styled'

const EventItem = ({ event }) => {
  // const navigate = useNavigate() // page version
  const formattedDate = formatDate(event.date)

  const [isOpenRegistrationModal, setIsOpenRegistrationModal] = useState(false)
  const [isOpenParticipantsModal, setIsOpenParticipantsModal] = useState(false)

  const handleOpenRegistrationModal = () => {
    setIsOpenRegistrationModal(true)
  }

  const handleOpenParticipantsModal = () => {
    setIsOpenParticipantsModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenRegistrationModal(false)
    setIsOpenParticipantsModal(false)
  }

  // const handleViewParticipants = async () => {  // page version
  //   navigate(`/${event._id}/participants`)
  // }

  return (
    <>
      <CardThumb>
        <Title>{event.title}</Title>
        <Descr>{event.description}</Descr>
        <p>{event.organizer}</p>
        <p>{formattedDate}</p>
        <BtnWrapper>
          <Btn onClick={handleOpenRegistrationModal}>Registration</Btn>
          <Btn onClick={handleOpenParticipantsModal}>View</Btn>
          {/* <StyledLink to={`/${event._id}/register`}>Registration</StyledLink>  // page version
          <Btn onClick={handleViewParticipants}>View</Btn> */}
        </BtnWrapper>
      </CardThumb>
      {isOpenRegistrationModal && (
        <Modal onClose={handleCloseModal} isOpenModal={isOpenRegistrationModal}>
          <EventRegistration eventId={event._id} />
        </Modal>
      )}
      {isOpenParticipantsModal && (
        <Modal onClose={handleCloseModal} isOpenModal={isOpenParticipantsModal}>
          <EventParticipants eventId={event._id} />
        </Modal>
      )}
    </>
  )
}

export default EventItem
