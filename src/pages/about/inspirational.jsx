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

import React from 'react';
import './about.scss';
import './inspirational.scss';
import { useFirebaseDoc } from './../../services/hooks-firebase'
import FooterComponent from '../../components/footer';


export default function InspirationalComponent() {

	/*---=| Using Firebase Hooks: Single Random Doc |=---*/
	const concept = useFirebaseDoc('concept', [])

	/////////??????????????????????????//////////// NOT WORKING!
	const FBDoc = () => {
		concept = useFirebaseDoc('concept', concept)
	}

	return (
		<React.Fragment>
			
			{/*---=| show Concept: single doc |=---*/}
			<div className='concept-main-container'>
				<div key={concept.id} className='concept-container'>
					<div className='concept-title'>{concept.title}</div>
					<div className='concept-notes'>{concept.notes}</div>
					<div className='concept-author'>{concept.author}</div>

					<button onClick={FBDoc} className='button-random'>RANDOM QUOTE</button>

					{/* <br/> */}
					
					{/* <h1 style={{color:'red', textTransform:'uppercase'}}>titolo</h1> */}
					{/* <div className='concept-title'>{title}</div>
					<div className='concept-author'>{author}</div> */}
					{/* <h2>{title}</h2>
					<h2>{author}</h2> */}

					{/* <div
						className='concept-bgImage'
						style={{ backgroundImage: `url(${concept.bgImage})` }}
					>
						{concept.bgImage}
					</div> */}
					{/* <img src='./../../assets/images/inspirational/woman.jpg' alt='woman' className='img-src'/> */}

					{/* <div className='concept-bgImage'></div> */}

				</div>

			</div>

			<FooterComponent />
		</React.Fragment>
	);
}

// export default InspirationalComponent;
