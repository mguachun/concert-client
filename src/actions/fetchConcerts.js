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


// export function fetchConcerts() {
//   return (dispatch) => {
//     dispatch({ type: "START_ADDING_CONCERTS_REQUEST" });
//     fetch("http://localhost:3000/concerts")
//       .then((response) => response.json())
//       .then((concerts) => dispatch({ type: "ADD_CONCERTS", concerts }));
//   };
// }