import {Component} from 'react';

class CovidGridRow extends Component {
    constructor(props) {
        super(props);
    }
    
    rowClicked(country) {
        this.props.itemClickedHandler(country);
    }

    render() {
        return (<tr onClick={() => this.rowClicked(this.props.country)}>
            <td>{this.props.country}</td>
            <td>{this.props.cases}</td>
        </tr>);
    }
}

export default CovidGridRow;