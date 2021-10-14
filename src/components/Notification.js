import { useState, useEffect } from 'react'
import { Notification } from 'styles/components/notificationStyle'

export default function notification({ message, setMessage, error }) {
  if (!message) return null

  useEffect(() => {
    const timeId = setTimeout(() => {
      setMessage('')
    }, 5000)

    return () => {
      clearTimeout(timeId)
    }
  }, [])

  return <Notification error={error}>{message}</Notification>
}
