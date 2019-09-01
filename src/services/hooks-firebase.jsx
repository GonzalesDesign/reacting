import { useState, useEffect } from 'react'
import { db } from './../firebase'

export const useFirebaseDoc = ( fbCollection, initialValue ) => {
	
	const [ result, setResult ] = useState( initialValue );

	useEffect(() => {
		const unsubscribe = db.collection(fbCollection).onSnapshot(snapshot => {
			const resultData = snapshot.docs.map((doc)=>({
				id: doc.id,
				...doc.data()
			}))
			
			/*---=| Populate result with resultData |=---*/
			setResult(resultData);
					
		});
				
		/*---=| Unsubscribe to closed connection |=---*/
		return () => unsubscribe();
		
	}, [fbCollection]); // Tells React to memoize regardless of arguments.

	return result
}

