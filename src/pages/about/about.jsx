

import React from "react";
import "./about.scss";
import InspirationalComponent from './inspirational';

export default function AboutComponent() {
	
	return (
		<React.Fragment>
			{/* <div onChange="{fGetConcept()}"></div> */}

			<div className="about-main-container">
				<div className="about-image-container">
					<span className="about-image-title">
						INSPIRATIONAL THOUGHTS APP
						<div className="react-version">
							<p>CRUD: Built with Angular7 • Ionic4 • Firebase Cloud Firestore</p>
							<p>Viewing using React {React.version}</p>
						</div>
					</span>
				</div>

				{/*---=| Show InspirationalComponent |=---*/}
				<InspirationalComponent/>

			</div>
			
		</React.Fragment>
	);
}
