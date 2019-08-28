// import React, { useState, useEffect } from "react";
import React from "react";
import "./contact-feature.scss";
import FooterComponent from "./../../components/footer";

const fHandleSubmit = () => {
	console.log('Handle Submit');
}

export default function ContactFeatureComponent() {
	return (
		<React.Fragment>
			<div className="contact-feature-main-container">
				{/* <div className="contact-feature-image-container"><h1>CONTACT FEATURE COMPONENT WORKS!</h1></div> */}

				<div className="contact-feature-container">
					<div className="contact-feature-intro-container">
						<div className="left-container">
							<div className="left-column-info">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Numquam, accusantium!
							</div>
						</div>
						<div className="right-container" />
					</div>

					<div className="three-columns-container">
						<div className="one-three" />
						<div className="two-three" />
						<div className="three-three" />
					</div>

					<div className="form-label">Email Us:</div>

					<form action="" className="form-container">
						{/* <hr/> */}
						<input type="text" placeholder="Name:" className="form-input" />
						{/* <hr/> */}
						<input type="text" placeholder="Address:" className="form-input" />
						<input type="text" placeholder="Email::" className="form-input" />
						<input
							type="text"
							placeholder="Phone Number:"
							className="form-input"
						/>
						{/* <hr/> */}
						<button className="email-submit-button">Submit</button>
					</form>

					{/* ///////////////////////////////////////////?????????????? */}
					<form onSubmit={fHandleSubmit}>
						<label>Name:
							<input type="text" name="name" />
						</label>
						<br/>
						<input type="submit" value="Submit" />
					</form>


				</div>

				{/*---= Element: Footer Component =---*/}
				<FooterComponent className="contact-footer" />
			</div>
		</React.Fragment>
	);
}
