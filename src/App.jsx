/*****************************************
* Project: Learning ReactJS
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.08.19
* Notes: Component notes goes here.
*****************************************/
/*--------=| Imports |=--------*/
import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import NavigationComponent from './components/nav';

// import ContentComponent from './pages/home/home';
// import AboutComponent from './pages/about/about';
// import ProjectsComponent from './pages/projects/projects';
// import ContactComponent from './pages/contact/contact';
// import ExtraComponent from './xtrapage';
import FooterComponent from './components/footer';

/*--------=| Main Component Function |=--------*/
export default function App() {
  // class App extends Component {
    // render() {
      // return (

  const tabTitle = 'Odee & John : 2nd Proj';

  /*--=| useEffect() hooks: same as = componentDidMount(), 
		componentWillUnmount() || similar to ngOnInit()|=--*/
	useEffect(() => {
		document.title = tabTitle; //setting page tab title
		console.log('tabTitle: ', tabTitle);
  });
  
  /*----------=| State |=----------*/
	// const menu = ['Home', 'About', 'Projects', 'Contact'];
	// const routeMenus = [
	// 	{ id: "n0", name: "Home", urlLink: "/" },
	// 	{ id: "n1", name: "About", urlLink: "/pages/about" },
	// 	{ id: "n2", name: "Projects", urlLink: "/pages/projects" },
	// 	{ id: "n3", name: "Contact", urlLink: "/pages/contact" }
	// ];

  /*--------=| Return View |=--------*/
  return (

    // <Router>
		// 	<div>
		// 		<nav className="router-main-container">
		// 			{/* <div className="logo">LOGO</div> */}

		// 			<ul className="router-container">
		// 				{routeMenus.map((data, indx) => {
		// 					console.log("data: ", data.name, " | ", "indx: ", indx);

		// 					return (
		// 						<li key={indx} className="router-menu">
		// 							<Link to = { data.urlLink } > { data.name } </Link>
		// 						</li>
		// 					);
		// 				})}
		// 			</ul>

		// 		</nav>

				
    //     {/* <Route exact path="/" component={ContentComponent} /> */}
    //     {/* <Route path="/xtrapage" component={ExtraComponent} /> */}
    //     {/* <Route path="/topics" component={Topics} /> */}

		// 		<Route path="/" exact component={ ContentComponent } />
		// 		<Route path="/pages/about" component={ AboutComponent } />
		// 		<Route path="/pages/projects/" component={ ProjectsComponent } />
		// 		<Route path="/pages/contact/" component={ ContactComponent } />

		// 	</div>
		// </Router>

    <div className="App">

      <div>
        { /*--=| main navigation |=---*/ }
        <NavigationComponent/>
        { /*--=| contents |=---*/ }
        {/* <ContentComponent/> */}
      </div>

      {/* <div> */}
        { /*--=| footer navigation |=---*/ }
        <FooterComponent/>
      {/* </div> */}

    </div>

  );
}