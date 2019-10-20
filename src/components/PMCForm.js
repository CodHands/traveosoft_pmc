import React, { useState } from 'react'
import YearPicker from "react-year-picker";

const PMCForm = (props) => {

    const [searchQuery, setSearchQuery] = useState('')
    const [fromYear, setFromYear] = useState('')
    const [toYear, setToYear] = useState('')

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            searchQuery, fromYear, toYear
        }
        props.fetchData(body)
    }

    const handleFromYearChange = (year) => {
        setFromYear(year)
    }

    const handleToYearChange = (year) => {
        setToYear(year)
    }

    return (
        <form onSubmit={handleSubmit} className="text-center">
            <div className="form-group">
                <label className="text-left">
                    <b>Enter your query:</b>
                    <input type="text" 
                            value={searchQuery} 
                            onChange={handleChange}
                            className="form-control mt-2" />
                </label>
            </div>
            <div className="row text-center">
                <div className="col-12">  
                    <div className="form-group">
                        <label className="text-left">
                        <b>From Year</b>
                        <YearPicker 
                            onChange={handleFromYearChange} />
                        </label>
                    </div>
                </div>
                <div className="col-12">   
                    <div className="form-group">
                        <label className="text-left">
                        <b>To Year</b>
                        <YearPicker onChange={handleToYearChange} />
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" disabled={searchQuery && fromYear && toYear ? false : true} className="btn btn-primary form-button">Submit</button>
        </form>
    )
}

export default PMCForm;
