import React from "react";
import "./contact-form.scss";
import FloatingLabel from "floating-label-react";
import FloatingLabelInput from 'react-floating-label-input';

const fHandleSubmit = () => {
	console.log('Handle Submit');
}

export function ContactFormComponent({ onChange, value }) {
	return (
		<React.Fragment>

		<div style={{ fontSize: 24 }}>
			<FloatingLabelInput
				id="example-3"
				label="label"
				// onBlur={action('onBlur')}
				onChange={action('onChange')}
				// onFocus={action('onFocus')}
				value={value}
			/>
		</div>;
		<hr/>
		<FloatingLabel
			id="email"
			name="email"
			placeholder="Your email"
			type="email"
			// value={this.state.value}
			// onChange={evt => this.setState(() => ({ value: evt.currentTarget.value }))}
		/>

			<div className="form-label">Email Us:</div>

			<form action="form" className="form-container">
				{/* <hr/> */}
				<input type="text" placeholder="Name:" className="form-input" />
				{/* <hr/> */}
				<input type="text" placeholder="Address:" className="form-input" />
				<input type="email" placeholder="Email::" className="form-input" />
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
