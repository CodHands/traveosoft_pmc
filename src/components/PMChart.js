import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const PMChart = ({options}) => (
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
)

export default PMChart
