import React, { useState, useEffect } from 'react'
import { filterEvents } from 'helpers/filterEvents'
import { FiltersWrapper, FilterItem } from './SelectFilters.styled'

const Filters = ({ events, setFilteredEvents }) => {
  const [filterValues, setFilterValues] = useState({
    title: '',
    date: '',
    organizer: '',
  })

  useEffect(() => {
    const filtered = filterEvents(events, filterValues)
    setFilteredEvents(filtered)
  }, [filterValues, events, setFilteredEvents])

  const handleFilterChange = (name, value) => {
    setFilterValues({ ...filterValues, [name]: value })
  }

  const renderSelectOptions = (fieldName) => {
    const uniqueValues = [...new Set(events.map((event) => event[fieldName]))]
    return (
      <select
        value={filterValues[fieldName]}
        onChange={(e) => handleFilterChange(fieldName, e.target.value)}
      >
        <option value=''>All</option>
        {uniqueValues.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    )
  }

  return (
    <FiltersWrapper>
      <FilterItem>
        <label>Title:</label>
        {renderSelectOptions('title')}
      </FilterItem>
      <FilterItem>
        <label>Date:</label>
        {renderSelectOptions('date')}
      </FilterItem>
      <FilterItem>
        <label>Organizer:</label>
        {renderSelectOptions('organizer')}
      </FilterItem>
    </FiltersWrapper>
  )
}

export default Filters
