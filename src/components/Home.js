import React, {Component} from "react";
import Link from "react-router-dom/es/Link";

class Home extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // setTimeout(()=>{
        //     alert("Component is mounted!")
        //
        // },2000)
    }

    buttonClick() {
        // alert("Home button is clicked")
        // navigateTo("/header");

    }

    render() {
        return (

            <div>
                Hello World Home
                <button onClick={this.buttonClick}>Click </button>
                <Link to="/header">About</Link>

            </div>
        )
    }
}

export default Home;