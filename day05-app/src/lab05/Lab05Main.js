import {Component} from 'react';
import CovidGrid from './CovidGrid';
import CovidSummary from './CovidSummary';

class Lab05Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            covidData: [
                { "country": "USA", "cases": 188592, "recovered": 7251, "deaths": 4055 },
                { "country": "Italy", "cases": 105792, "recovered": 15729 , "deaths": 12428 },
                { "country": "Spain", "cases": 95923, "recovered": 19259, "deaths": 8464 },
                { "country": "France", "cases": 52128, "recovered": 9444, "deaths": 3523 },
                { "country": "India", "cases": 1590, "recovered": 148, "deaths": 45 }
            ]
        };
    }

    render() {
        return (<div>
            <CovidGrid data={this.state.covidData}/>
            <hr/>
            <CovidSummary/>
        </div>);
    }
}

export default Lab05Main;