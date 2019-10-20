import React, { Component, Fragment } from 'react'
import { fetchPmcList } from './../services/homeService';

//components
import Header from './../components/Header';
import PMCForm from './../components/PMCForm';

class home extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchQuery: 'sdnkd',
            options: {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Monthly Average Rainfall'
                },
                subtitle: {
                    text: 'Source: WorldClimate.com'
                },
                xAxis: {
                    categories: null,
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Number of Publications'
                    }
                },
                data: 'test',
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<p style="margin-bottom: 0px">{point.title}</p><tr><td style="color:{series.color};padding:0">Number of citations: </td>' +
                        '<td style="padding:0"><b>{point.citations}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Year of Publications',
                    data: null
                }]
            }
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async() => {
        const data = await fetchPmcList()
        if(data){
            this.setState({
                options: {
                    ...this.state.options, 
                    xAxis: {
                        categories: Object.keys(data),
                        crosshair: true
                    },
                    series: [{
                        name: 'Year of Publications',
                        data: Object.values(data)
                    }]
                }
            })
        }
    }

    render() {
        return (
            <Fragment>
                <Header />
                <PMCForm />
            </Fragment>
        )
    }
}

export default home;
