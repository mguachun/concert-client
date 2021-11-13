const concertsReducer = (state = { concerts: [], loading: false }, action) => {
  
  switch(action.type) {
    case 'LOADING_CONCERTS':
      return {
        ...state,
        concerts: [...state.concerts],
        loading: true
      }
    //case 'ADD_CONCERT':
      // adds one more concert to the concert array (don't mutate the array - create a new one)
      case 'ADD_CONCERT':
        return {
          ...state, 
          concerts: [state.concerts, action.concert],
          loading: false
        }
      case "SET_CONCERTS":
        return {
          ...state,
          concerts: action.concerts,
          loading: false
        }
      case 'DELETE_CONCERT':
        return {
          concerts: state.concerts.filter(concert => concert.id !== action.payload.id),
          ...state
        }

    default:
      return state;
  }
  
}

export default concertsReducer;