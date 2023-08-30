import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./Navigation.css";

const Navigation=()=>{
	return (
		<div className="nav">
			<div className="logo">
				<img src={process.env.PUBLIC_URL + '/img/logo.png'}/>
				<p>Movie</p>
			</div>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
		</div>
	);
}

export default Navigation;