import React from "react"
import "./Countdown.css"

function Countdown() {
  const getNextSaturdayAt10AM = () => {
    const now = new Date()
    const nextSaturday = new Date()

    // Calculate the number of days until the next Saturday
    const daysUntilSaturday = (6 - now.getDay() + 7) % 7 || 7 // Ensure it's always at least 1 day ahead
    nextSaturday.setDate(now.getDate() + daysUntilSaturday)

    // Set the time to 10:00 AM
    nextSaturday.setHours(10, 0, 0, 0)

    return nextSaturday.getTime()
  }

  const targetDate = getNextSaturdayAt10AM()

  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const distance = targetDate - now

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    }
  }

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft())

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="countdown-timer">
      <h1>Next Available Batch</h1>
      <p>{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</p>
    </div>
  )
}

export default Countdown
