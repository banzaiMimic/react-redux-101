const gameReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GAME':
      return [...state, { ...action.game }]
    default:
      return state
  }
}

export default gameReducer

/*
const test = ['a', 'b', 'c']
const spread = [...test ]
console.log(spread)
// Array ["a", "b", "c"]

const add = ['d']
const newSpread = [...test, ...add]
console.log(newSpread)
// Array ["a", "b", "c", "d"]
*/