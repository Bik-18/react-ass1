import { Component } from "react";
import "./../App.css"

class ClassComp extends Component{
    State={
        btnResult: this.props.btnC
    }
    render(){
        const hideFunc={visibility : "hidden"}
        const visibleFunc={visibility : "visible"}
        const inlCss={
            color : "red",
        }
        return(
            <>
            <div className="txt" id="txtCN" style={this.props.btnC ? visibleFunc : hideFunc}>
                <h3>This is created using class Component</h3>
                <p id="ptext">This is done using external css</p>
                <p style={inlCss}>This is done using inline css</p>
            </div>
            </>
        )
    }
}

export default ClassComp;