export const fetchConcerts = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CONCERTS'})
    fetch(this.baseUrl).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_CONCERTS', concerts: responseJSON.concerts })
    })
  }
}