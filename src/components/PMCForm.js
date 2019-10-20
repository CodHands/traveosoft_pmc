import React, { useState } from 'react'
import { fetchPmcList } from './../services/homeService';

const PMCForm = (props) => {

    const [searchQuery, setSearchQuery] = useState('')

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSubmit = () => {
        props.fetchData()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" 
                        value={searchQuery} 
                        onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default PMCForm;
