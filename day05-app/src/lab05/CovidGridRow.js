import {Component} from 'react';

class CovidGridRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<tr>
            <td>{this.props.country}</td>
            <td>{this.props.cases}</td>
        </tr>);
    }
}

export default CovidGridRow;