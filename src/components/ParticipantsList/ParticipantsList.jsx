import React from 'react'
import { List, Item } from './ParticipantsList.styled'

const ParticipantsList = ({ participants }) => {
  return (
    <List>
      {participants.map((participant, index) => (
        <Item key={index}>
          <p>{participant.name}</p>
          <p>{participant.email}</p>
        </Item>
      ))}
    </List>
  )
}

export default ParticipantsList
