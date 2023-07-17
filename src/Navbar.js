
import React, { useState } from "react"
import { Link } from "react-router-dom";
function Navbar({ mode, click }) {
    let click2 = () => {
        click();

        if (mode === 'light') {


            setStyle({
                backgroundColor: 'black',
                color: 'white'
            })
            setbtntext("Enable the white mode");
            document.body.style.backgroundColor = "#042743";
        }
        else {

            setStyle({
                backgroundColor: 'cyan',
                color: 'bluevoilet'
            })
            setbtntext("Enable the dark mode")
            document.body.style.backgroundColor = "white";
        }
    }
    const [style, setStyle] = useState({
        backgroundColor: 'cyan',
        color: 'bluevoilet'
    })
    const [btntext, setbtntext] = useState("Enable the dark mode")







    return (
        <div class="container" style={style}>

            <Link to='/'>TextUtils</Link>
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>

            {/* <a href="#help">Help</a>*/}
            <button onClick={() => responsive()} id="res"><img src="https://tse3.mm.bing.net/th?id=OIP.eQDSOvXEZN6RHnbA6yP7CQHaHa&pid=Api&P=0" height="10px" /></button>
            <button onClick={click2} style={{ float: "right" }}>{btntext}</button>
        </div>
    );
    function responsive() {

        let x = document.getElementsByClassName("container")[0];
        if (x.className === 'container') {
            x.className += " responsive";
        }
        else {
            x.className = 'container';
        }
    }
}

export default Navbar;

