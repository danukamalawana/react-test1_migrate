import React, {Component} from "react";
import Product from "./Product";


class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: []
        }
        this.testMethod = this.testMethod.bind(this);

    }

    componentDidMount() {
        this.setState({
            item: [
                {id: 1, name: 'aaa'},
                {id: 2, name: 'bbb'},
                {id: 3, name: 'ccc'},
                {id: 4, name: 'ddd'},
                {id: 5, name: 'eee'},
                {id: 6, name: 'fff'}
            ]
        })
    }

    testMethod(val) {
        alert("hello world " + val);
    }

    render() {

        return (

            <div className="container">

                <label htmlFor="exampleColorInput" className="form-label">Color picker</label>
                <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#563d7c"
                       title="Choose your color"/>
                <label htmlFor="customRange1" className="form-label">Example range</label>
                <input type="range" className="form-range" id="customRange1"/>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>


                <div>
                    {
                        this.state.item.map(i => {
                            return <Product
                                item={i}
                                tMethod={this.testMethod}
                            />
                        })

                    }
                </div>


            </div>
        )
    }
}

export default Cart;