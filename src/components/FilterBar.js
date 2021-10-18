import React from 'react'


function FilterBar() {

    return (
        <div className="filter-bar">
            <label htmlFor="filter-input">Filter: </label>
            <input className="filter-input" />
        </div>
    )
}

export default FilterBar