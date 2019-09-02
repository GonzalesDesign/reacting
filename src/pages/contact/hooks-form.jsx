import React, { useState } from "react";
import "./hooks-form.scss";

export default function HooksFormComponent(props) {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const handleSubmit = evt => {
		evt.preventDefault();
		alert(`Submitting 
			Name: ${name} 
			Address: ${address} 
			Email: ${email} 
			Phone: ${phone}`);
	};

	return (
		
		<React.Fragment>
			
			<div className="form-label">Email Us:</div>
			<form onSubmit={handleSubmit} className="form-container">
				{/* <label>
					{" "}
					First Name:
					<input
						type="text"
						value={name}
						onChange={e => setName(e.target.value)}
						className="form-input"
					/>
				</label> */}
				{/*=--------------------------------------------------=: field: name */}
				<input type="text" placeholder="Name:" value={name} className="form-input"
					onChange={e => setName(e.target.value)}
					// required
				/>
				{/*=--------------------------------------------------=: field: address */}
				<input type="text" placeholder="Address:" value={address} className="form-input"
					onChange={e => setAddress(e.target.value)}
					// required
				/>

				{/*=--------------------------------------------------=: field: email */}
				<input type="email" placeholder="Email:" value={email} className="form-input"
					onChange={e => setEmail(e.target.value)}
					// required
				/>

				{/*=--------------------------------------------------=: field: phone */}
				<input type="text" placeholder="Phone Number: (123)123 1234" value={phone} className="form-input"
					onChange={e => setPhone(e.target.value)}
					pattern="\(\d{3}\)\d{3} \d{4}"
					required
				/>


				<input type="submit" value="Submit" />
				<button className="email-submit-button">Submit</button>
			</form>

		</React.Fragment>

	);
}
