import React from "react";
import './pages/about/about.scss'
// import MainFeatureComponent from './main-feature';

export default function ExtraComponent() {

	return(
		
		<React.Fragment>

			<div className="about-main-container">

				<div className="about-image-container">Image Goes Here</div>
				
				<div>
					<h1>ABOUT COMPONENT WORKS!</h1>
				</div>

			</div>

			{/*---= Element: Main Feature Component =---*/}
			{/* <MainFeatureComponent/> */}

		</React.Fragment>
	)
}
