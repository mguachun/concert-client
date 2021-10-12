
const ConcertCard = props => {
    return(
      <div className="concert-card">
        <h2>{props.artist}</h2>
        <p>{props.concert_title}</p>
        <p>{props.venue}</p>
        <p>{props.date}</p>
        <p>{props.genre}</p>
        <p>{props.comment}</p>
      </div>
    )
  }
  
  export default ConcertCard;