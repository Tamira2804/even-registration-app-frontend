import React, { useState } from 'react'
import {
  FiltersWrapper,
  FilterItem,
  FilterButton,
} from './ParticipantsFilters.styled'

const ParticipantsFilters = ({ setFilterValue }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const filteredEvents = { name, email }

    setFilterValue(filteredEvents)
  }

  return (
    <FiltersWrapper onSubmit={handleSubmit}>
      <FilterItem>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FilterItem>
      <FilterItem>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FilterItem>

      <FilterButton type='submit'>Apply Filters</FilterButton>
    </FiltersWrapper>
  )
}

export default ParticipantsFilters
