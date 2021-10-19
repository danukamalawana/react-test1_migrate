import React, {Component} from "react";
import Link from "react-router-dom/es/Link";

class Home extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {
        return (

            <div>
                <Link to="/cart">Cart</Link>





            </div>
        )
    }
}

export default Home;