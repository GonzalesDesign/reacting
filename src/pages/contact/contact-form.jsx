import React from "react";
import "./contact-form.scss";

const fHandleSubmit = () => {
	console.log('Handle Submit');
}

export function ContactFormComponent() {
	return (
		<React.Fragment>
			<div className="form-label">Email Us:</div>

			<form action="" className="form-container">
				{/* <hr/> */}
				<input type="text" placeholder="Name:" className="form-input" />
				{/* <hr/> */}
				<input type="text" placeholder="Address:" className="form-input" />
				<input type="text" placeholder="Email::" className="form-input" />
				<input type="text" placeholder="Phone Number:" className="form-input" />
				{/* <hr/> */}
				<button className="email-submit-button">Submit</button>
			</form>

			{/* ///////////////////////////////////////////?????????????? */}
			<form onSubmit={fHandleSubmit}>
				<label>
					Name:
					<input type="text" name="name" />
				</label>
				<br />
				<input type="submit" value="Submit" />
			</form>
		</React.Fragment>
	);
}
