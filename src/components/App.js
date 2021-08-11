import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};
    paraFunction(){
        console.log("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");

    }
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
                <p id="para"></p>
	<button id="click" onclick={paraFunction}> Click Me</button>
    		</div>
    	);
    }
}


export default App;
