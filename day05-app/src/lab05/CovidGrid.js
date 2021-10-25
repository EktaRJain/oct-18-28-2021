import {Component} from 'react';
import CovidGridRow from './CovidGridRow';

class CovidGrid extends Component {
    constructor(props) {
        super(props);
    }

    populateRows() {
        let {data} = this.props
        let rows = [];
        data.forEach(it => {
            let row = <CovidGridRow country={it.country} cases={it.cases}/>
            rows.push(row);
        });
        return rows;
    }

    render() {
        return (<div>
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Cases</th>
                    </tr>
                </thead>
                <tbody>
                    {this.populateRows()}
                </tbody>
            </table>
        </div>);
    }
}

export default CovidGrid;