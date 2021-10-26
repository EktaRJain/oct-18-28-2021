import { Component } from 'react';

class Collections extends Component {
    getItems() {
        let langs = ["Java", "Ruby", "Go", "JavaScript", "Python"];
        let liItems = langs.map(it => <li>{it}</li>);
        return liItems;
    }
    
    getItemsStartingWithJ() {
        let langs = ["Java", "Ruby", "Go", "JavaScript", "Python"];
        let liItems = langs
                        .filter(it => it.startsWith("J"))
                        .map(it => <li>{it}</li>);
        return liItems;
    }
    render() {
        return (<div><ul>
            {this.getItems()}
        </ul>
        <hr/>
        <h5>Languages starting with J</h5>
        <ul>
            {this.getItemsStartingWithJ()}
        </ul>
        </div>);
    }
}

export default Collections;