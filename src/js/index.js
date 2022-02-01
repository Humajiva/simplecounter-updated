//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/home.jsx";

//render your react application
let seconds = 0;
setInterval(() => {
	seconds++;
	let one = Math.floor(seconds / 1);
	let two = Math.floor(seconds / 10);
	let three = Math.floor(seconds / 100);
	let four = Math.floor(seconds / 1000);
	let five = Math.floor(seconds / 10000);
	let six = Math.floor(seconds / 100000);
	console.log(one);
	ReactDOM.render(
		<Home
			number1={six % 10}
			number2={five % 10}
			number3={four % 10}
			number4={three % 10}
			number5={two % 10}
			number6={one % 10}
		/>,
		document.querySelector("#app")
	);
}, 1000);
