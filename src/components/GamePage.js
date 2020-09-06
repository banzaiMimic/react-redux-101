import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as gameActions from '../redux/actions/gameActions'
import PropTypes from 'prop-types'

const GamePage = props => {

  const [ game, setGame ] = useState({ name: '' })

  const handleChange = evt => {
    setGame( { name: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.dispatch( gameActions.addGame( game ))
    console.log('submit!')
  }

  useEffect( () => {

  }, [])

  return (
    <>
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
      <ul>
        { props.games.map( (game,idx) => {
          return <li key={`${game.name}${idx}`}>{game.name}</li>
        })}
      </ul>
    </>
  )
}

GamePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    games: state.games
  }
}

/* 
const mapStateToProps = (state, ownProps) => {
component will re-render when any of these 'mapStateToProps' properties change
( be specific )
*/


export default connect( mapStateToProps )(GamePage)

/*
export default connect( mapStateToProps, mapDispatchToProps )(GamePage)
when mapDispatchToProps (optional) is omitted, 
our component gets a dispatch property injected by default (props.dispatch)
*/