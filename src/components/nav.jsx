import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Container, Row, Col } from 'react-bootstrap';
import "./nav.scss";

import 	ContentComponent	from 	"./../pages/home/home";
import 	AboutComponent 	from 	"./../pages/about/about";
import 	ProjectsComponent from 	"./../pages/projects/projects";
import 	ContactComponent 	from 	"./../pages/contact/contact";

export default function NavigationComponent() {
	/*----------=| State |=----------*/
	// const menu = ['Home', 'About', 'Projects', 'Contact'];
	const menus = [
		{ id: "n0", name: "Home", 		urlLink: "/" },
		{ id: "n1", name: "About", 	urlLink: "/pages/about" },
		{ id: "n2", name: "Projects", urlLink: "/pages/projects" },
		{ id: "n3", name: "Contact", 	urlLink: "/pages/contact" }
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
									<Link to={data.urlLink}> {data.name} </Link>
								</li>
							);
						})}
					</ul>
				</nav>

				{/* <Switch> */}
				<Route exact path="/" component={ContentComponent} />
				<Route path="/pages/about/" component={AboutComponent} />
				<Route path="/pages/projects/" component={ProjectsComponent} />
				<Route path="/pages/contact/" component={ContactComponent} />
				{/* </Switch> */}
			</div>
		</Router>
	);
}
