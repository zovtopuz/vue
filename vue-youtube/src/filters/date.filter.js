export default function dateFilter (value, format = 'date') {
  const options = {}
  // console.log(value)

  if (format.includes('date')) {
    options.day = '2-digit'
    options.month = 'short'
    options.year = 'numeric'
  }

  if (format.includes('time')) {
    options.hour = '2-digit'
    options.minute = '2-digit'
    options.second = '2-digit'
  }

  return new Intl.DateTimeFormat('ua-Ua', options).format(new Date(value))
}
