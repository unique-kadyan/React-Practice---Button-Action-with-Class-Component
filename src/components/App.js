import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};
   
    render() {
    	return(
    		<div id="main" classname="container">
				{ /* Do not remove this main div!! */ }
                
	<button id="click" onClick={() => return(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>);}> Click Me</button>
    		</div>
    	);
    }
}


export default App;
