import React, { useState, useEffect } from 'react'

export const useCounter = (initialValue, maxValue) => {

	/*---=| optional function |=---*/
	const fDoThese = () => {
		console.log('Do These!');
	}
	// const fDoThese2 = () => {
	// 	console.log('Do These 2!');
	// }

	/*---=| interval: tick |=---*/
	const tick = (() => {
		setCount((count + 1) % maxValue);
		// setRound((round + 1) % maxValue);
		console.log('count: ', count);
		console.log('maxValue: ', maxValue);

		if(count > maxValue) {
			console.log('maxed out!');
			fDoThese()
		}
	})
	
	/*---=| useState |=---*/
	const [count, setCount] = useState(initialValue >= maxValue ? fDoThese : 0);
	// const [round, setRound] = useState(count)

	/*---=| useEffect |=---*/
	useEffect(() => {
		const interval = setInterval( tick, 1000 )

		return () => {
			clearInterval(interval);
		}

	}, [count]);

	return count;
}


////////////////////////////////////////////////////
export function Counter() {
	const [count, setCount] = useState(0);
 
	useEffect(() => {
	  const timeout = setTimeout(() => {
		//  console.log(`You clicked ${count} times`);
	  }, 1000);

	  return () => {
		  clearTimeout(timeout)
	  }

	});
 
	return (
	  <div>
		 <p>You clicked {count} times</p>
		 <button onClick={() => setCount(count + 1)}>
			Click me
		 </button>
	  </div>
	);
 }