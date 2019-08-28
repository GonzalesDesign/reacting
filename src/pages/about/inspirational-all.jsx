/*****************************************************
* Project: Learning ReactJS
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.08.26
* Notes: Using React's useState, useEffect accessing
			Inspirational App running on Firebase Cloud.
			Built in Angular7 & Ionic4, Inspirational app
			is a CRUD application.
*****************************************************/

import React, { useEffect, useState } from "react";
import "./about.scss";
import { db } from "./../../firebase";

////////////////////////////////////////////////////////
function InspirationalComponent() {
	
	/*--=| get single doc randomly |=--*/
	function FGetConcept() {
	// const FGetConcept = () => {
		const [concept, setConcept] = useState([]);
		
		// const unsubscribe = db
		useEffect(() => {
			const unsubscribe = db.collection("concept")
			.onSnapshot(snapshot => {
				const randomNumber = fGetRandomInt(snapshot.docs.length);
				const conceptData = snapshot.docs[randomNumber].data();
				console.log("conceptData: ", conceptData);
				/////////////////////////
				setConcept(conceptData);
			});
			return () => unsubscribe()
		}, []);
		return concept;
	}
	
	let concept = FGetConcept();

	////////////////////////////////////////////////////////
	// export default function AboutComponent() {

	const [state, setState] = useState([]);
	const [singlePost, setSinglePost] = useState([]);
	let dataPost = [];

	const fGetRandomInt = max => {
		return Math.floor(Math.random() * Math.floor(max));
	};

	/*--=| get collection |=--*/
	useEffect(() => {
		db.collection("avatar")
			.get()
			.then(querySnapshot => {
				const data = querySnapshot.docs.map(doc => doc.data());
				console.log("data: ", data); //returns all collection from firebase
				setState(data);
				// setState({ state: data })
				// console.log('state: data: ', state)
				// console.log('data.id: ', data.id)
			})
			.catch(err => {
				console.log("Something went wrong!");
			});
	}, []);

	/*--=| get single doc |=--*/
	useEffect(() => {
		// console.log("singlePost 1: ", singlePost);
		// console.log("db 1: ", db);
		db
			// .firestore()
			.collection("avatar")
			// .doc("avatarName")
			.onSnapshot(snapshot => {
				// debugger
				const randomNumber = fGetRandomInt(snapshot.docs.length);
				// console.log('randomNumber: ', randomNumber);
				// console.log('snapshot.docs.length: ', snapshot.docs.length);
				// console.log('snapshot.docs[randomNumber].id: ', snapshot.docs[randomNumber].id);
				console.log(
					"snapshot.docs[randomNumber].data.avatarName: ",
					snapshot.docs[randomNumber].data().avatarName
				);

				// const postId = snapshot.docs[randomNumber].id
				// console.log('postId: ', postId);

				const postDataX = snapshot.docs[randomNumber].data().avatarName;
				console.log("postDataX: ", postDataX);

				dataPost = postDataX;

				const postData = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				}));
				console.log("postData: ", postData);

				/////////////////////////
				setSinglePost(postDataX);

				console.log("singlePost: ", singlePost);
				console.log("dataPost: ", dataPost);
			});

		// setSinglePost(doc.data());
		// setSinglePost(doc);
		// console.log("singlePost 2: ", singlePost);
		// console.log("Current data: ", doc.data());
		// });
	}, []);

	// --------------------------------------

	// const fRandomQuote = () => {
	// 	console.log("Random Quotes: ", concept);
	// 	concept = FGetConcept();
	// };

	// function InspirationalComponent() {	
		// let concept = FGetConcept();
	// --------------------------------------

	return (
		<React.Fragment>

				{/*---=| show Concept: single doc |=---*/}
				<div className="concept-main-container">
					
					<div key={concept.id} className="concept-container">
						
						<div className="concept-title">{concept.title}</div>
						<div className="concept-notes">{concept.notes}</div>
						<div className="concept-author">{concept.author}</div>

						<button onClick={FGetConcept}>RANDOM QUOTE</button>

					</div>

				</div>

				{/*---=| show collection: all the documents |=---*/}
				{/* <div>
					<ul>
						{state.map(post => (
							<li key={post.id} className="about-all-li">
								post: {post.id} <span> </span>
								{post.avatarName}
								<div className="avatar-description">
									{post.avatarDescription}
								</div>
								<hr />
							</li>
						))}
					</ul>
				</div> */}
		</React.Fragment>
	);
}

export default InspirationalComponent;