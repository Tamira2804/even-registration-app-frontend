export const filterEvents = (events, filterValue) => {
  if (!filterValue) return events

  const { title, date, organizer } = filterValue
  const filteredEvents = events.filter((event) => {
    const matchTitle =
      !title ||
      (event.title && event.title.toLowerCase().includes(title.toLowerCase()))
    const matchDate =
      !date || (event.date && event.date.substring(0, 10) === date)
    const matchOrganizer =
      !organizer ||
      (event.organizer &&
        event.organizer.toLowerCase().includes(organizer.toLowerCase()))

    return matchTitle && matchDate && matchOrganizer
  })

  return filteredEvents
}
