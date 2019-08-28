import { useState, useEffect } from 'react'
import { db } from './../firebase'


////////////////////////////////////////////////////////
export let useFirebaseDoc = (fbCollection, initialValue) => {

	const [result, setResult] = useState(initialValue);

	useEffect(() => {
		const unsubscribe = db.collection(fbCollection).onSnapshot(snapshot => {
			const randomNumber = fGetRandomInt(snapshot.docs.length);
			const resultData = snapshot.docs[randomNumber].data();
			console.log('resultData: ', resultData);

			/*---=| Populate result with resultData |=---*/
			setResult(resultData);

		});

		/*---=| Unsubscribe to close connection |=---*/
		return () => unsubscribe();

	}, []);

	return result;
}

//---------------------------------------------------------=======
const fGetRandomInt = max => {
	const randNum = Math.floor(Math.random() * Math.floor(max));
	console.log('randNum: ', randNum);
	return randNum;
};