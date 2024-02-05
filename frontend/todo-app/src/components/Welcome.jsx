import React from 'react'
import { useParams } from 'react-router-dom'

export default function Welcome() {

  const params = useParams()

  return (
    <div className='Welcome'>
      <h1>Hey {params.username}!</h1>
      <h2>Welcome to ToDo Application.</h2>
    </div>
  )
}
