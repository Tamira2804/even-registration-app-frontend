import React, { useState, useEffect } from 'react'
import { FiltersWrapper, FilterItem } from './SelectFilters.styled'

const SelectFilters = ({ events, setFilteredEvents }) => {
  const [filters, setFilters] = useState({
    title: '',
    organizer: '',
    date: '',
  })

  const categories = [...new Set(events.map((event) => event.title))]
  const organizer = [...new Set(events.map((event) => event.organizer))]
  const dates = [...new Set(events.map((event) => event.date))]

  useEffect(() => {
    const filtered = events.filter((event) => {
      return (
        (!filters.title || event.title === filters.title) &&
        (!filters.organizer || event.organizer === filters.organizer) &&
        (!filters.date || event.date === filters.date)
      )
    })
    setFilteredEvents(filtered)
  }, [filters, events, setFilteredEvents])

  const handleTitleChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      title: e.target.value,
    }))
  }

  const handleOrganizerChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      organizer: e.target.value,
    }))
  }

  const handleDateChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      date: e.target.value,
    }))
  }

  return (
    <FiltersWrapper>
      <FilterItem>
        <label htmlFor='title'>Title</label>
        <select id='title' value={filters.title} onChange={handleTitleChange}>
          <option value=''>All Titles</option>
          {categories.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </FilterItem>
      <FilterItem>
        <label htmlFor='date'>Date</label>
        <select id='date' value={filters.date} onChange={handleDateChange}>
          <option value=''>All Dates</option>
          {dates.map((date) => (
            <option key={date} value={date}>
              {new Date(date).toLocaleDateString()}
            </option>
          ))}
        </select>
      </FilterItem>
      <FilterItem>
        <label htmlFor='organizer'>Organizer</label>
        <select
          id='organizer'
          value={filters.organizer}
          onChange={handleOrganizerChange}
        >
          <option value=''>All organizers</option>
          {organizer.map((organizer) => (
            <option key={organizer} value={organizer}>
              {organizer}
            </option>
          ))}
        </select>
      </FilterItem>
    </FiltersWrapper>
  )
}

export default SelectFilters
