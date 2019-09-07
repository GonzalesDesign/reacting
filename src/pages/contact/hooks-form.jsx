import React, { useState } from "react";
import "./hooks-form.scss";

export default function HooksFormComponent(props) {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = evt => { evt.preventDefault();
		const emailForm = {
			Name: name,
			Address: address,
			Email: email,
			Phone: phone,
			Message: message
		}
		alert(`Submitting 
			Name: ${name} 
			Address: ${address} 
			Email: ${email} 
			Phone: ${phone}
			Message: ${message}`);

			console.log(`Name: ${name} `)
			console.log("emailForm:", emailForm)
	};

	return (
		
		<React.Fragment>
			
			<div className="form-label">Email Us:</div>
			{/* <form onSubmit={handleSubmit} className="form-container"> */}
			<form noValidate onSubmit={handleSubmit} className="form-container">
			{/* Many developers might not want to use novalidate, in order to show errors using the DOM API. */}
			
				{/* <label>First Name:
					<input type="text" value={name} onChange={e => setName(e.target.value)} className="form-input"/>
				</label> */}
				{/*=--------------------------------------------------=: field: name */}
				{/* <label>First Name: */}
				<input type="text" placeholder="Name:" value={name} className="form-input"
					onChange={e => setName(e.target.value)}
					required />
				{/* </label> */}

				{/*=--------------------------------------------------=: field: address */}
				<input type="text" placeholder="Address:" value={address} className="form-input"
					onChange={e => setAddress(e.target.value)}
					// pattern="\(\d{16}\)"
					minLength = "16"
					required
				/>

				{/*=--------------------------------------------------=: field: email */}
				<input type="email" placeholder="Email:" value={email} className="form-input"
					onChange={e => setEmail(e.target.value)}
					required
				/>

				{/*=--------------------------------------------------=: field: phone */}
				<input type="text" placeholder="Phone Number: (212)123 4321" value={phone} className="form-input"
					onChange={e => setPhone(e.target.value)}
					pattern="\(\d{3}\)\d{3} \d{4}"
					required
				/>

				{/*=--------------------------------------------------=: field: textarea */}
				<textarea placeholder="Message:" value={message} className="form-input"
					onChange={e => setMessage(e.target.value)}
					rows="6"
				/>
				{/* </textarea> */}

				{/* <input type="submit" value="Submit" /> */}
				<button className="email-submit-button">Submit</button>

			</form>

		</React.Fragment>

	);
}
