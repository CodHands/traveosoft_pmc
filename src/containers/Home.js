import React, { Component, Fragment } from 'react'
import { fetchPmcList } from './../services/homeService';
import Loader from '../assets/images/loader.gif';
import Alert from 'react-s-alert';

// mandatory
import 'react-s-alert/dist/s-alert-default.css';

//components
import Header from './../components/Header';
import PMCForm from './../components/PMCForm';
import PMChart from './../components/PMChart';

class home extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchQuery: '',
            loader: false,
            options: {
                colors: ['#f45b5b', '#8085e9', '#8d4654', '#7798BF', '#aaeeee',
                            '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                chart: {
                    type: 'column', 
                    style: {
                        fontFamily: 'Josefin Sans',
                        backgroundColor: null
                    },
                },
                title: {
                    text: '',
                    style: {
                        color: 'black',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }
                },
                subtitle: {
                    text: 'Source: Europe PubMed Central(PMC)',
                    style: {
                        color: 'black'
                    }
                },
                legend: {
                    backgroundColor: '#E0E0E8',
                    itemStyle: {
                        fontWeight: 'bold',
                        fontSize: '13px'
                    }
                },
                xAxis: {
                    categories: null,
                    crosshair: true,
                    labels: {
                        style: {
                            color: '#6e6e70'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Number of Publications'
                    },
                    labels: {
                        style: {
                            color: '#6e6e70'
                        }
                    }
                },
                data: 'test',
                tooltip: {
                    headerFormat: '<span style="font-size:14px; font-weight: 800">{point.key}</span><table>',
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
                    },
                    series: {
                        shadow: true
                    },
                    candlestick: {
                        lineColor: '#404048'
                    },
                    map: {
                        shadow: false
                    }
                },
                labels: {
                    style: {
                        color: '#6e6e70'
                    }
                },
                series: [{
                    name: 'Year of Publications',
                    data: null
                }]
            }
        }
    }

    handleSlide = (e) => {
        e.preventDefault();
        
    }

    handleCloseAll = (e) => {
        e.preventDefault();
        Alert.closeAll();
    }

    fetchData = async(body) => {
        this.setState({
            loader: true
        })
        const data = await fetchPmcList(body)
        if(data){
            this.setState({
                options: {
                    ...this.state.options, 
                    xAxis: {
                        categories: Object.keys(data),
                        crosshair: true
                    },
                    title: {
                        text: body.searchQuery.toUpperCase()
                    },
                    series: [{
                        name: 'Year of Publications',
                        data: Object.values(data)
                    }]
                },
                loader: false
            })
            this.props.history.push('/chart', 
                {data : this.state.options})
        } else {
            Alert.error('No match found!', {
                position: 'top-right',
                effect: 'slide',
                timeout: 5000
            });
            this.setState({
                loader: false
            })
        }
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="app-container pt-5">
                    <PMCForm fetchData={(body) => this.fetchData(body)}/>
                </div>
                <div className="app-container text-center">
                    {this.state.loader ? <img src={Loader} width="128" alt="loader"/> : null}
                </div>
            </Fragment>
        )
    }
}

export default home;
