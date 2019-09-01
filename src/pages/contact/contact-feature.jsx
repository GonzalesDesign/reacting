// import React, { useState, useEffect } from "react";
import React from "react";
import "./contact-feature.scss";
import FooterComponent from "./../../components/footer";
import { ResumeComponent } from './resume';
import { ContactFormComponent } from './contact-form';
// import { useCounter, Counter } from '../../services/counter';




export default function ContactFeatureComponent() {

	const devStyle = {
		border: "1px solid var(--rlg-color-success)"
	}

	// const counter = useCounter(0, 3);
	// console.log('counter: ', counter);

	

	return (
		<React.Fragment>
			<div className="contact-feature-main-container">
				{/* <div className="contact-feature-image-container"><h1>CONTACT FEATURE COMPONENT WORKS!</h1></div> */}

				<div className="contact-feature-container">
					<div className="contact-feature-intro-container">
						<div className="left-container">
							<div className="left-column-info">
								A designer who codes. <br/>
								Self-motivated, independent, detail-oriented and responsible team-player.

								{/* =--------------------------------------------------=:counter test */}
								{/* <div className="counter">{counter}</div> */}
								{/* <Counter /> */}

							</div>


						</div>

						<div className="right-container">
							<div className="header">R.Lloyd Gonzales</div>
							<div className="position">UI Designer | Developer</div>
							<div className="info"> <span className="info-label"> ~ Tools of the trade ~ </span> <br/>	
								Photoshop • Illustrator <br/> HTML • CSS • Javascript <br/> Angular • Ionic • React
							</div>
						</div>

					</div>
					
					{/* =--------------------------------------------------=:resume */}
					<ResumeComponent />
					
					{/* //=-------------------------------------=:three columns */}
					<div className="three-columns-container">
						<div className="one-three" />
						<div className="two-three" />
						<div className="three-three" />
					</div>

					{/* //=-------------------------------------=:form */}
					<ContactFormComponent />

					


				</div>

				{/*---= Element: Footer Component =---*/}
				{/* <FooterComponent className="contact-footer" /> */}
			</div>
				{/*---= Element: Footer Component =---*/}
				<FooterComponent className="contact-footer" />
		</React.Fragment>
	);
}
