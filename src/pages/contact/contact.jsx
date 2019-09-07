import React from "react";
import './contact.scss'
import ContactFeatureComponent from './contact-feature'
// import MainFeatureComponent from './main-feature';
// import ResumeComponent from './resume';
import FooterComponent from './../../components/footer';

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

			{/* <ResumeComponent /> */}

			{/*---= Element: Main Feature Component =---*/}
			{/* <MainFeatureComponent/> */}

			{/*---= Element: Footer Component =---*/}
			{/* <FooterComponent className="contact-footer" /> */}
			{/* <FooterComponent /> */}

		</React.Fragment>
	)
}
