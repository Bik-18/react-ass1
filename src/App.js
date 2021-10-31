import {Component} from "react";
import FuncComp from "./components/funtionalComponent";
import ClassComp from "./components/classComponent";
import "./App.css";

class App extends Component{
    state={
        btnC: false,
        btnF: false
    }
    funtionFuncComp=()=>{
        if(!this.state.btnF){
            this.setState({btnF : true})
        }

        else{
            this.setState({btnF : false})
        }
        // this.setState({btnF : true})
        // console.log("hii");

    }
    funtionClassComp=()=>{
        if(!this.state.btnC){
            this.setState({btnC : true})
        }

        else{
            this.setState({btnC : false})
        }
        // console.log("hii");
    }
    render(){
        // hideFunc={visibility : "hidden"}
        // hideFunc={visibility : "hidden"}
        console.log(this.state);
        return(
            <>
                <h3 id="heading">Styling using Funtional and Class Component</h3>
                <div className="container">
                    <button onClick={this.funtionClassComp}>To see Styling in Class Component</button>
                    <button onClick={this.funtionFuncComp}>To see Styling in Functional Component</button>
                </div>
                <div id="divContainer">
                    <ClassComp btnC={this.state.btnC}/>
                    <FuncComp btnF={this.state.btnF}/>
                </div>
            </>
        )
    }
}
export default App;