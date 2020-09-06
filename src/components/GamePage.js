import React, { useEffect, useState } from 'react'

const GamePage = () => {

  const [ game, setGame ] = useState({ name: '' })

  const handleChange = evt => {
    setGame( { name: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    console.log('submit!')
  }

  useEffect( () => {

  }, [])

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Games</h2>
      <h3>Add Game</h3>
      <input 
        type='text' 
        onChange={(e) => handleChange(e)}
        value={game.name}
      />
      <input type='submit' value='Add' />
    </form>
  )
}

export default GamePage