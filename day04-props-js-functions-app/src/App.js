import {Component} from 'react';
import Parent from './lab04/Parent';
import Library from './Library';

class App extends Component {
    render() {
        return (<div>
            <Parent/>
            <hr/><br/><br/><br/><br/><br/><br/>
            <div style={{backgroundColor: 'pink'}}>
                <Library/>
            </div>
            <hr/>
            <div style={{backgroundColor: 'yellow'}}>
                <Library/>
            </div>
        </div>);
    }
}

export default App;