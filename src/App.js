/*****************************************
* Project: Learning ReactJS
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.08.19
* Notes: Component notes goes here.
*****************************************/
/*--------=| Imports |=--------*/
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.scss';
import NavigationComponent from './components/nav';
import ContentComponent from './pages/contents';
// import FooterComponent from './components/footer.jsx';


/*--------=| Main Component Function |=--------*/
export default function App() {

  const tabTitle = 'Odee & John : 2nd Proj';

  /*--=| useEffect() hooks: same as = componentDidMount(), 
		componentWillUnmount() || similar to ngOnInit()|=--*/
	useEffect(() => {
		document.title = tabTitle; //setting page tab title
		console.log('tabTitle: ', tabTitle);
	});

  /*--------=| Return View |=--------*/
  return (

    <div className="App">

      <div>
        { /*--=| main navigation |=---*/ }
        <NavigationComponent/>
        { /*--=| contents |=---*/ }
        <ContentComponent/>
      </div>

      <div>
        { /*--=| footer navigation |=---*/ }
        {/* <FooterComponent/> */}
      </div>

    </div>

  );
}