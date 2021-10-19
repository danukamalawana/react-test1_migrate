import React, {Component} from "react";
import Link from "react-router-dom/es/Link";

class Header extends Component {


    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }



    render() {
        return (

            <div>
                <nav className="navbar navbar-expand-lg    navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cart" className="nav-link active" aria-current="page">Cart</Link>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle"   id="navbarDropdownMenuLink"
                                       role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown link
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>


                                <li className="nav-item dropdown">
                                    <select className="nav-link dropdown-toggle" id="navbarDropdownMenuLink"
                                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <option className="dropdown-item" selected>Open this select menu</option>
                                        <option className="dropdown-item" value="1">One</option>
                                        <option className="dropdown-item" value="2">Two</option>
                                        <option className="dropdown-item" value="3">Three</option>
                                    </select>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;