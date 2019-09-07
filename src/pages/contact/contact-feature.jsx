// import React, { useState, useEffect } from "react";
import React from "react";
import "./contact-feature.scss";
import ResumeComponent from './resume';
import HooksFormComponent from './hooks-form';
import { MediaQueries } from './../../services/media-queries';
// import { ContactFormComponent } from './contact-form';
// import { useCounter, Counter } from '../../services/counter';
// import {FooterComponent} from "./../../components/footer";

export default function ContactFeatureComponent() {

	const mediaQueries = MediaQueries(window.innerWidth, "300px");

	return (
		<React.Fragment>
			
			{mediaQueries}

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
							
							{/*=------------------------------------------=:*/}
							<a className="one-three" title="Portfolio site"
								href="https://pwa.rlloydgonzales.com"
								target="_blank" rel="noopener noreferrer">
									<div className="bg-trans-box"></div>
							</a>

							{/*=------------------------------------------=:*/}
							<a className="two-three" title="Vodka site"
								href="https://vodka.rlloydgonzales.com"
								target="_blank" rel="noopener noreferrer">
									<div className="bg-trans-box"></div>
							</a>

							{/*=------------------------------------------=:*/}
							<a className="three-three" title="Inspirational site"
								href="https://ideas.rlloydgonzales.com"
								target="_blank" rel="noopener noreferrer">
									<div className="bg-trans-box"></div>
							</a>

					</div>

					{/* //=-------------------------------------=:form */}
					<HooksFormComponent />

					{/* <ContactFormComponent /> */}

				</div>

			</div>
			
			{/*---= Element: Footer Component =---*/}
			{/* <FooterComponent className="contact-footer" /> */}
			{/* <FooterComponent /> */}
				
		</React.Fragment>
	);
}
