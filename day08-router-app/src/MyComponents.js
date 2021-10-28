import { Link } from "react-router-dom";

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
            <li>Factfulness</li>
            <li>Why we sleep?</li>
            <li>Meluha</li>
        </ul>
    </div>);
};