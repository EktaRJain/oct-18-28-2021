import { Link, useParams, useHistory } from "react-router-dom";

export const Menu = () => {
    return (<nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/books">Books</Link></li>
        </ul>
    </nav>);
};

export const Home = () => {
    return (<div>
        <Menu/> <hr/>
        <h1>React Router example home page</h1>
    </div>);
};

export const Contact = () => {
    return (<div>
        <Menu/> <hr/>
        <h3>Mail me at prabhu.bits@gmail.com</h3>
    </div>);
};

export const BookList = (props) => {
    return (<div>
        <Menu/> <hr/>
        <h1>{props.heading}</h1>
        <ul>
            <li>Factfulness <Link to="/details/Factfulness">View</Link></li>
            <li>Morris <Link to="/details/Morris">View</Link></li>
            <li>Meluha <Link to="/details/Meluha">View</Link></li>
        </ul>
    </div>);
};

export const BookDetails = () => {
    let {name} = useParams();
    let history = useHistory();
    const showList = () => {
        history.push('/books');
    };
    return (<div>
        <Menu/>
        <hr/>
        <h1>Book details</h1>
        <h3>Name: {name}</h3>
        <hr/>
        <button onClick={showList}>Go back to list</button>
    </div>)
}