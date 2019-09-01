import { useState, useEffect } from 'react'
import { db } from './../firebase'


////////////////////////////////////////////////////////
export const useFirebaseCollection = (fbCollection, initialValue) => {

	const [result, setResult] = useState(initialValue);

	useEffect(() => {
		// const unsubscribe = db.collection(fbCollection)
		db.collection(fbCollection)
			.get()
			.then(querySnapshot => {
				const resultData = querySnapshot.docs.map((doc)=>({
					id: doc.id,
					...doc.data()
				}))
				// const dataId = resultData.id;
				// console.log('resultData: ', resultData);
				// console.log('resultData.id: ', resultData.id);
				// const resultData = querySnapshot.docs.map(doc => doc.data());
				// console.log("collection resultData: ", resultData); //returns all collection from firebase
				// const dataId = querySnapshot.docs.map(doc => doc.id);
				// console.log("collection dataId: ", dataId);

				/*---=| Populate result with resultData |=---*/
				setResult(resultData);
			})
			// .then(query => {
			// 	const dataId = query.docs.map(doc => doc.id);
			// 	console.log("collection dataId: ", dataId);
			// })
			.catch(err => {
				console.log("Something went wrong!", err);
			});

		/*---=| Unsubscribe to close connection: it's throwing an error! |=---*/
		// return () => unsubscribe();

	}, [fbCollection]);
	
	return result; //returns all
};


/*-----------=| usage: in another component import this file |=-----------*/

// /*---=| Using Firebase Hooks: Single Random Doc |=---*/
// const state = useFirebaseCollection('avatar', [])

// return (

// 	<React.Fragment>

// 		{/*---=| show collection: all the documents |=---*/}
		// <div className="layout-main-container">
// 			<ul className="ul-container">
// 				{state.map(post => (
					// <li key={post.id} className="about-all-li">
// 						post: {post.id} <span> </span>
// 						{post.avatarName}
// 						<div className="avatar-description">
// 							{post.avatarDescription}
// 						</div>
// 						<hr />
// 					</li>
// 				))}
// 			</ul>

// 		</div>

// 	</React.Fragment>
// );
