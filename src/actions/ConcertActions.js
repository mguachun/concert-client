export const addConcert = (concert) => ({ type: "ADD_CONCERTS", payload: concert})
export const fetchConcerts = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CONCERTS'})
    fetch("http://localhost:3000/concerts")
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      // console.log(responseJSON)
      dispatch({ type: 'ADD_CONCERTS', concerts: responseJSON })
    })
  }
}

export const createConcert = (concert) => {
  return (dispatch) => {
    const configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(concert)
    }
    fetch("http://localhost:3000/concerts", configObj)
    .then(res => res.json())
    .then(json => {
      dispatch(addConcert(json))
    })
  }  
}
export const newFetchConcerts = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CONCERTS'})
    fetch("http://localhost:3000/concerts")
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      // console.log(responseJSON)
      dispatch({ type: 'ADD_CONCERTS', concerts: responseJSON })
    })
  }
}

  




