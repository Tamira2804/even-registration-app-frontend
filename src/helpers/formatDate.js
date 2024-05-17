export function formatDate(date) {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }
  const formattedDate = new Date(date).toLocaleString('uk-UA', options)
  return formattedDate.replace(', ', ' ')
}
