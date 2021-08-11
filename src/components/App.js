import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};
    paraFunction(){
        return(
	<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>	
	)

    }
    render() {
    	return(
    		<div id="main" classname="container">
				{ /* Do not remove this main div!! */ }
                
	<button id="click" onclick={this.paraFunction}> Click Me</button>
    		</div>
    	);
    }
}


export default App;
