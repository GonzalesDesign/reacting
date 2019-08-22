import React from "react";
import './home.scss'
import MainFeatureComponent from './main-feature';

export default function ContentComponent() {
	// const menu = ["Home", "About", "Products", "Contact"];
 
	const count = 0;
	const fOnScroll = () => {
		console.log('fOnScroll: function call test ', count);
	}

	return(
		
		<React.Fragment>

			<div className="home-main-container">

				{fOnScroll()}

				{/*--= This can be carousel =---*/}
				<div className="image-container"></div>

			</div>

			{/*---= Element: Main Feature Component =---*/}
			<MainFeatureComponent/>

		</React.Fragment>
	)
}
