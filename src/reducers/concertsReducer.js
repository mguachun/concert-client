const concertsReducer = (state = { concerts: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_CONCERTS':
      return {
        ...state,
        concerts: [...state.concerts],
        loading: true
      }
    case 'ADD_CONCERTS':
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