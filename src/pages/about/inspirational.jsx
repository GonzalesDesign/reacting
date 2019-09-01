/*****************************************************
* Project: Learning ReactJS
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.08.31
* Notes: Using React's useState, useEffect accessing
			Inspirational App running on Firebase Cloud.
			Built in Angular7 & Ionic4, Inspirational app
			is a CRUD application.
*****************************************************/

import React, { Suspense, useState, useEffect } from "react";
import { useFirebaseDoc } from "./../../services/hooks-firebase";
// import { useFirebaseCollection } from "../../services/hooks-FBCollection";
import "./inspirational.scss";
import FooterComponent from "../../components/footer";

export default function InspirationalComponent() {

	//helper function: ---------------------------------=======:randomizer
	const fGetRandomInt = (max) => {
		const randNum = Math.floor(Math.random() * Math.floor(max));
		return randNum;
	};

	//---------------------------------------------------------=======:db
	/*---=| useFirebaseDoc: onSnapshot() |=---*/
	const conceptCollection = useFirebaseDoc("concept", [1]);
	// console.log("conceptCollection: ", conceptCollection);
	
	/*---=| useFirebaseCollection: querySnapshot() |=---*/
	// const conceptCollection = useFirebaseCollection("concept", [1]);
	// console.log("conceptCollection: ", conceptCollection);

	//---------------------------------------------------------=======:setter
	const [randCon, setRandCon] = useState([conceptCollection]);
	useEffect(() => {
		const randNum = fGetRandomInt(conceptCollection.length);
		const randCollection = conceptCollection[randNum];
		// fGetRandomInt(conceptCollection.length, conceptCollection);
		setRandCon(randCollection);
	}, [conceptCollection]);

	//---------------------------------------------------------=======:onClick
	const fRandomConcept = () => {
		const randNum = fGetRandomInt(conceptCollection.length);
		const randCollection = conceptCollection[randNum];
		// console.log("randCollection: ", randCollection);
		setRandCon(randCollection);
	}
	

	//---------------------------------------------------------=======:jsx
	return (
		<React.Fragment>

			{/*---=| main-container: 100vw |=---*/}
			<div className="concept-main-container">

				{/*---=| show Concept: single doc from the concept collection |=---*/}
				<Suspense fallback={<div className="loading">Loading...</div>}>
					<div key={randCon.id} className="concept-container">

						<div className="concept-title">{randCon.title}</div>
						<div className="concept-notes multi_lines_text">{randCon.notes}</div>
						<div className="concept-author">{randCon.author}</div>
						
						<br/>
						<br/>

						<button className="button-random" onClick={fRandomConcept}>RANDOM QUOTE</button> <br />
					</div>
				</Suspense>

			</div>

			<FooterComponent />

		</React.Fragment>

	);
}

// export default InspirationalComponent;
