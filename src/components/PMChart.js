import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const PMChart = (props) => {
    return(
        <div className="app-container">
            <HighchartsReact
                highcharts={Highcharts}
                options={props.location.state.data}
            />
        </div>
    )
}

export default PMChart
