export const filterParticipants = (participants, filterValue) => {
  if (!filterValue) return participants

  const { name, email } = filterValue
  const filteredParticipants = participants.filter((participant) => {
    const matchName =
      !name ||
      (participant.name &&
        participant.name.toLowerCase().includes(name.toLowerCase()))
    const matchEmail =
      !email ||
      (participant.email &&
        participant.email.toLowerCase().includes(email.toLowerCase()))
    return matchName && matchEmail
  })

  return filteredParticipants
}
