import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
//this component will only takes numbers as props and display it in different box
export const Home = (props) => {
	return (
		<div
			className="counter text-center d-flex justify-content-center mt-5 bg-dark"
			display="flex">
			<div className="timersymbol text-white p-3 bg-info m-1 rounded">
				<i className="far fa-clock"></i>
			</div>
			<div className="text-white p-3 bg-info m-1 rounded">
				{props.number1}
			</div>
			<div className="text-white p-3 bg-info m-1 rounded">
				{props.number2}
			</div>
			<div className="text-white p-3 bg-info m-1 rounded">
				{props.number3}
			</div>
			<div className=" text-white p-3 bg-info m-1 rounded">
				{props.number4}
			</div>
			<div className=" text-white p-3 bg-info m-1 rounded">
				{props.number5}
			</div>
			<div className=" text-white p-3 bg-info m-1 rounded">
				{props.number6}
			</div>
		</div>
	);
};

Home.propTypes = {
	number1: PropTypes.number,
	number2: PropTypes.number,
	number3: PropTypes.number,
	number4: PropTypes.number,
	number5: PropTypes.number,
	number6: PropTypes.number,
};
