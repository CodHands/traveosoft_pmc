import React, {Fragment} from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const PMChart = (props) => {

    const goBack = () => {
        props.history.push('/')
    }

    return(
        <Fragment>
            <div className="app-container">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={props.location.state.data}
                />
            </div>          
            <div className="backButton">
                <a href="#" className="previous" onClick={goBack}>&laquo; Back</a>
            </div>
        </Fragment>
    )
}

export default PMChart
