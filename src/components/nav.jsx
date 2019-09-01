/************************************************
* Project: Learning ReactJS
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.08.25
* Notes: Using react-router-dom, 
			and the brand new suspense & lazy.
************************************************/

// import React from "react";
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Container, Row, Col } from 'react-bootstrap';
import "./nav.scss";

/*----------=| Regular Loading |=----------*/
// import 	ContentComponent	from 	"./../pages/home/home";
// import 	AboutComponent 	from 	"./../pages/about/about";
// import 	ProjectsComponent from 	"./../pages/projects/projects";
// import 	ContactComponent 	from 	"./../pages/contact/contact";

/*----------=| Lazy Loading |=----------*/
const 	ContentComponent = 	lazy( () => import( "./../pages/home/home" ));
const 	AboutComponent = 		lazy( () => import( "./../pages/about/about" ));
const 	ProjectsComponent = 	lazy( () => import( "./../pages/projects/projects" ));
const 	ContactComponent = 	lazy( () => import( "./../pages/contact/contact" ));

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
					<div className="logo">S</div>

					<ul className="navigation-container">
						{menus.map((data, indx) => {
							// console.log("data: ", data.name, " | ", "indx: ", indx);

							return (
								<li key={indx} className="navigation-menu">
									<Link to={data.urlLink}> {data.name} </Link>
								</li>
							);
						})}
					</ul>
				</nav>
				
				<Suspense fallback={<div>Loading...</div>}> {/* MoonLoader */}

					<Switch>
						<Route exact path="/" component={ContentComponent} />
						<Route path="/pages/about/" component={AboutComponent} />
						<Route path="/pages/projects/" component={ProjectsComponent} />
						<Route path="/pages/contact/" component={ContactComponent} />
					</Switch>
				</Suspense>
			</div>
		</Router>
	);
}
