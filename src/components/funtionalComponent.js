import "./../App.css";

function FuncComp(props){
    const hideFunc={visibility : "hidden"}
    const visibleFunc={visibility : "visible"}
    const inlCss={
        color : "red",
    }
    // const card={
    //     float : "right"
    // }
    return(
        <>
        <div className="txt" id="txtFN" style={props.btnF ? visibleFunc : hideFunc}>
            <h3>This is created using functional Component</h3>
            <p id="ptext">This is done using external css</p>
            <p style={inlCss}>This is done using inline css</p>
        </div>
        </>
    )
}

export default FuncComp;