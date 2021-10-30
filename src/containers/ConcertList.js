import { Component } from 'react'
import Concert from "./Concert"
import {connect} from "react-redux"
import {deleteConcert} from "../actions/ConcertActions"

class ConcertList extends Component {

    displayConcerts = () => {
        return (
            this.props.concerts.map(instance => <Concert deleteConcert={this.props.deleteConcert} object={instance}/> )
        )
    }

    render() {
        return (
            <div>
                <h1 className="c-index">Concert Index:</h1>
                {!this.props.loading ? this.displayConcerts() : "loading"}
            </div>
        )
    }
}

export default connect(state => {
    return {
        concerts: state.concerts,
        loading: state.loading
    }
}, { deleteConcert }
)(ConcertList);



