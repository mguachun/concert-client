
const ConcertCard = props => {
    return(
      <div className="concert-card">
        <h2>{this.props.artist}</h2>
        <p>{this.props.concert_title}</p>
        <p>{this.props.venue}</p>
        <p>{this.props.date}</p>
        <p>{this.props.genre}</p>
        <p>{this.props.comment}</p>
      </div>
    )
  }
  
  export default ConcertCard;