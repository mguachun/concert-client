const concertsReducer = (state = { concerts: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_CONCERTS':
      return {
        ...state,
        cats: [...state.concerts],
        loading: true
      }
    case 'ADD_CONCERTS':
      return {
        ...state,
        cats: action.concerts,
        loading: false
      }
    default:
      return state;
  }
}

export default concertsReducer;