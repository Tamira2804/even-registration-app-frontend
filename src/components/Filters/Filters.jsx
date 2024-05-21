import React, { useState } from 'react'
import { FiltersWrapper, FilterItem, FilterButton } from './Filters.styled'

const Filters = ({ setFilterValue }) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [organizer, setOrganizer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const filteredEvents = { title, date, organizer }

    setFilterValue(filteredEvents)
  }

  return (
    <FiltersWrapper onSubmit={handleSubmit}>
      <FilterItem>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FilterItem>
      <FilterItem>
        <label htmlFor='date'>Date</label>
        <input
          type='date'
          id='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </FilterItem>
      <FilterItem>
        <label htmlFor='organizer'>Organizer</label>
        <input
          type='text'
          id='organizer'
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
        />
      </FilterItem>
      <FilterButton type='submit'>Apply Filters</FilterButton>
    </FiltersWrapper>
  )
}

export default Filters
