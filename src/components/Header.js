import React, {Component} from "react";
import Link from "react-router-dom/es/Link";

class Header extends Component {


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
        // alert("button is clicked")
        // navigateTo("/home");

    }

    render() {
        return (

            <div>
                Hello World Div
                <button onClick={this.buttonClick}>Click </button>
                <Link to="/">About</Link>
            </div>
        )
    }
}

export default Header;