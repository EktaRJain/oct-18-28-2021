* Single Page Applications (SPA)
* Single html page and you are going to write all your code in it.
* CSS, HTML, JS code

* Browser loads this single page and executes the code and the user interacts with this single page only
* Angular, React, Vue, Ember
* Frontend frameworks

### Need for React

* DOM-> Document Object Model
* Browser parses the HTML code and constructs a DOM tree
* DOM is a standard specification
* We use DOM API from JS language and manipulate the underlying tree
* Whenever the tree changes, the changes are reflected to the user in the UI

* Making veru frequent changes to the Real DOM is a costly affair in a SPA like FB, LI etc.
* React (from FB) introduces a __Virtual DOM__ tree.
* In a React application, you write code in JS and manipulate the Virtual DOM. React Engine behind the scenes will constantly update the changes to the Real DOM in an optimized manner
* React JS is recommended for applications where performance is a key factor
* Modularized Component-based development
* highly OO; Functional style

### JSX

* UI syntax for React JS applications
* It's not a valid JS syntax, so use Babel transpiler to compile to valid JS code
* Has strict XML-like syntax. Every start tag should have an end tag
* Has ONLY ONE ROOT element

* JSX expressions are written within curly braces
* You can refer to a property or call a function within the curly braces
* You can dynamically construct JSX elements using expressions


* JSX event handlers use Camelcase; onClick, onFocus, onChange etc.
* The event handlers take in function reference in expressions
* If you have an event handler function __function nameChanged() {}__, you will write __onChange={nameChanged}__

### Components

* Components are the basic building blocks in react applications
* A component can be class-based or Function-based
* A class based component is a class that extends Component class and overrides render method
* __render()__ method returns the JSX of that component.
* In other words, every component has its own UI defined using JSX syntax
* Every component is an independently running object. It has its own UI, logic and data __(Remember MVC???)__

``` javascript
class Hello extends React.Component {
  render() {
  	return <h1>Hello World</h1>;
  }
}

ReactDOM.render(<Hello/>, document.getElementById("root"));
```

### States

* State represents the data model in a component
* It's plain JSON data
* You define a state using __this.state = {...}__
* State is bound to the UI
* You can modify the state using __setState({...})__ method
* Modifying the state re-renders the UI again
* __render()__ method is called whenever __setState()__ is invoked

* Calling __setState__ creates a new __Virtual DOM tree__
* The previous Virtual DOM tree is compared with the current one
* If there are no changes, then the current tree is discarded
* If there are changes, the previous Virtual DOM tree is discarded and the changes are flushed out to the real DOM tree

* __DocumentFragment__ is usually used to update the real DOM in an optimized 
* You can read more on these two topics __Diffing algorithm__; __Reconciliation__ 

* __setState()__ executes asynchronously
* DO NOT access the state immediately after calling setState
* state may not yet be updated
* Use a callback function instead

### create-react-app

* sudo npm i -g create-react-app




































