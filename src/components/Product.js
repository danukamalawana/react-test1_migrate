import React,{Component} from "react";


class Product extends Component {


    constructor(props) {
        super(props);
        this.clickBtn=this.clickBtn.bind(this);
    }

    clickBtn(x){
        // this.props.tMethod.testMethod();
        this.props.tMethod(x);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4">{this.props.item.id}</div>
                    <div className="col-8">{this.props.item.name}</div>
                    <button onClick={()=>{
                        this.clickBtn(this.props.item.name)
                    }}>click</button>
                </div>
            </div>
        )
    }

}

export default Product;