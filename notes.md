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
