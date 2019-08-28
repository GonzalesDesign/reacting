import React from "react";
import './contact.scss'
import ContactFeatureComponent from './contact-feature'
// import MainFeatureComponent from './main-feature';

export default function ContactComponent() {

	return(
		
		<React.Fragment>

			<div className="contact-main-container">

				<div className="contact-image-container">
					<span className="contact-image-title">CONTACT COMPONENT WORKS!</span>
				</div>
				
				{/* <div className="devBorder">
					<ContactFeatureComponent/>
				</div> */}

			</div>

			<ContactFeatureComponent/>

			{/*---= Element: Main Feature Component =---*/}
			{/* <MainFeatureComponent/> */}

		</React.Fragment>
	)
}
