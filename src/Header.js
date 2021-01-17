// import React from "react";

const headerStyle = {
	color: "red",
};

const navStyle = {
	display: "flex",
	flexDirect: "row",
	alignItems: "center",
};

function Header() {
	return (
		<div className="container" style={navStyle}>
			<h1 style={headerStyle}>Joe O'Reilly.com</h1>
			<nav>
				<a>Home</a>
				<a>About</a>
				<a>Projects</a>
				<a>Get in touch!</a>
			</nav>
		</div>
	);
}

export default Header;
