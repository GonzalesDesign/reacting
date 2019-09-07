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
import Image0 from './../../assets/images/inspirational/candle.jpg';
import Image1 from './../../assets/images/inspirational/woman.jpg';
import Image2 from './../../assets/images/inspirational/fantasy.jpg';
import Image3 from './../../assets/images/inspirational/fantasy2.jpg';
import Image4 from './../../assets/images/inspirational/fantasy-3.jpg';
import Image5 from './../../assets/images/inspirational/cathedral-1.jpg';
import Image6 from './../../assets/images/inspirational/road-0.jpg';
import Image7 from './../../assets/images/inspirational/gothic-1.jpg';

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

	//---------------------------------------------------------=======:setter: onInit
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
	
	/*-----=| array of imported images \=-----*/
	const images = [Image0, Image1, Image2, Image3, Image4, Image5, Image6, Image7]
	/*-----=| generate random number \=-----*/
	const randImgNum = fGetRandomInt(images.length);
	/*-----=| inline css \=-----*/
	const bgImageStyle = {
		// backgroundImage: "url(./../../assets/images/inspirational/candle.jpg)"
		// backgroundImage: `url(${"./../../assets/images/inspirational/candle.jpg"})`,
		backgroundImage: `url(${images[randImgNum]})`
	}
	const fonts = ['var(--rlg-font-Oswald', 'var(--rlg-font-OpenSans', 'var(--rlg-font-Merriweather']
	const randFontNum = fGetRandomInt(fonts.length);
	const randomFontStyle = {
		fontFamily: `${fonts[randFontNum]}`
	}

	// const randomImage = [
	// 	"./../../assets/images/inspirational/cathedral-1.jpg",
	// 	"./../../assets/images/inspirational/fantasy.jpg",
	// 	"./../../assets/images/inspirational/woman.jpg"
	// ]
	// const bg = require("./../../assets/images/inspirational/cathedral-1.jpg");
	// const bg = require(randomImage[0]);



	// const baseUrl = "./../../assets/images/inspirational/";

	
	//---------------------------------------------------------=======:jsx
	return (
		<React.Fragment>

			{/*---=| main-container: 100vw |=---*/}
			<div className="concept-main-container">

				{/*---=| show Concept: single doc from the concept collection |=---*/}
				<Suspense fallback={<div className="loading">Loading...</div>}>
					{/*=-----=| random background image \=-----=*/}
					<div key={randCon.id} className="concept-container" style={bgImageStyle}>
					{/* <div key={randCon.id} className="concept-container" style ={ { backgroundImage: "url("+bg+")" } }> */}
					{/* <div key={randCon.id} className="concept-container" style ={ { backgroundImage: "url("+bg+")" } }> */}

					{/* <img src={require( `${ props.imageSource }` )} alt={props.imageAlt} /> */}
					{/* <img src={require( `${ randomImage[0] }` )} /> */}

						<div className="concept-title">{randCon.title}</div>
						<div className="concept-notes multi_lines_text" style={randomFontStyle}>{randCon.notes}</div>
						<div className="concept-author">{randCon.author}</div>
						
						<br/>
						<br/>

						<button className="button-random" onClick={fRandomConcept}>RANDOM QUOTE</button> 
						<br/>

					</div>

				</Suspense>

			</div>

			{/* <FooterComponent /> */}

		</React.Fragment>

	);
}

// export default InspirationalComponent;
