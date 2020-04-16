const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function formatDate(date) {
  const month = date.getMonth()
  const weekDay = date.getDay()
  const day = date.getDate()
  return `${days[weekDay]}, ${months[month]} ${day}`
}