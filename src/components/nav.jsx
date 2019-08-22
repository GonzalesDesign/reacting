import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Container, Row, Col } from 'react-bootstrap';
import "./nav.scss";

export default function NavigationComponent() {
	/*----------=| State |=----------*/
	// const menu = ['Home', 'About', 'Products', 'Contact'];
	const menus = [
		{ id: "n0", name: "Home", urlLink: "/" },
		{ id: "n1", name: "About", urlLink: "/pages/about" },
		{ id: "n2", name: "Products", urlLink: "/pages/products" },
		{ id: "n3", name: "Contact", urlLink: "/pages/contact" }
	];

	/*----------=| HTML View : JSX |=----------*/
	return (
		<Router>
			<div>
				<nav className="navigation-main-container">
					<div className="logo">LOGO</div>

					<ul className="navigation-container">
						{menus.map((data, indx) => {
							console.log("data: ", data.name, " | ", "indx: ", indx);

							return (
								<li key={indx} className="navigation-menu">
									<Link to={data.urlLink} rel="noopener noreferrer">
										{data.name}
									</Link>
								</li>
							);
						})}
					</ul>

				</nav>

				{/* <Route path="/" exact component={ ContentComponent } />
				<Route path="/about/" component={ AboutComponent } />
				<Route path="/pages/products/" component={ ProductsComponent } />
				<Route path="/pages/contact/" component={ ContactComponent } /> */}

			</div>
		</Router>
	);
}
