import React, { useState, useEffect } from "react";
import "./resume.scss";
import ResumeData from "./../../assets/data/experience-data.json";

export default function ResumeComponent() {
	const [display, setDisplay] = useState(true);

	const fDisplayLinks = (condition, elem) => {
		// useEffect((condition, elem) => {
		if (condition) {
			// setDisplay(condition)
			// console.log("item.displaySite: x: ", condition);
			// console.log("element: ", elem);
			// return elem

			// 		// return <h1>{setDisplay(true)}</h1>;
		}
		// console.log("item.displaySite: x: ", condition);
		// console.log("item.displaySite: nada");
		return null;

		// }, [])
	};

	// useEffect(() => {
	// 	// const randNum = fGetRandomInt(conceptCollection.length);
	// 	// const randCollection = conceptCollection[randNum];
	// 	// // fGetRandomInt(conceptCollection.length, conceptCollection);
	// 	// setRandCon(randCollection);
	// }, [conceptCollection]);

	return (
		<React.Fragment>

			{ResumeData.map((data, indx) => {
				const {address} = data.address;
				// console.log("data: ", data);
				// console.log("data.portfolio[1].image: ", data.portfolio[1].image);
				// console.log("indx: ", indx);
				// {data.portfolio[1]}
				// return (
				// 	<ul key={indx}>
				// 	  {data.portfolio.map(item => (
				// 		 <li key={item.id}>
				// 			<a href={item.url}>{item.title}</a>
				// 		 </li>
				// 	  ))}
				// 	</ul>
				//  );

				console.log("=---------------------------=");
				// key: data.id;

				return (
					<div key={indx} className="resume-main-container">
						<div className="resume-container">
							{/* <div className="resume-address">
								{data.address.street} <br />
								{data.address.city + " "}
								{data.address.state + " "}
								{data.address.zip} <br />
								{data.phone} <br />
								{data.email} <br />
								<img
									src={require("./../../assets/images/cupra-racer5.jpg")}
									alt="car test"
									width="300"
									height="auto"
								/>
							</div> */}

							<ul className="resume-ul-container">
								{data.portfolio.map(item => (
									<li key={item.id + "port"} className="resume-li-container">
										<div className="resume-experienced">
											<div className="resume-title"> {item.title} </div>
											<div className="resume-description multi_lines_text">
												{item.description}

												<div className="resume-framework-links">
													
													{item.displaySite && (
														<div>
															{item.frameworksSite.map(site => (
																<div key={site.id + "site"} className="framework-container">
																	<a href={site.url} target="_blank" rel="noopener noreferrer">
																	<span  className="framework-title">{site.title}</span> <br/>
																	<span  className="framework-subtitle">{site.subTitle}</span>
																	
																	</a>
																</div>
															))}
														</div>
													)}

													<br/>

													<div style={{ display: item.displaySite ? 'block' : 'none'}} className="display-inline">
														<h2>Show if true</h2>
														<p>using inline style display</p>
													</div>
												</div>

											</div>
											{/* <div>
											{item.displaySite && (
												<div>
													{item.frameworksSite.map(site => (
														<div key={site.id + "site"}>
															{site.title}
														</div>
													))}
												</div>
											)}
											</div> */}

											{/* x: { if (item.displaySite) { }} */}

											{/* {console.log('item.displaySite: ', item.displaySite)} */}
											{/* <div>{fDisplayLinks(item.displaySite, item.title)}</div> */}
										</div>

										<div>
											{/* onChange={fDisplayLinks(item.displaySite, item.frameworksSite)}> */}
											{fDisplayLinks(item.displaySite, item.frameworksSite)}
											{/* {item.frameworksSite.map(site => (
												<div key={site.id+"site"}>x: {site.id+"pwa"}{site.title}</div>
											))} */}
											{/* {item.frameworksSite} */}
											{/* {item.frameworksSite.title} */}
											{/* x: {display.title} */}
											{/* display: {item.displaySite} */}
										</div>

										{/* {item.displaySite && (
											<div>
												<h1>Welcome</h1>
												<p>Welcome to my home.</p>
												{item.frameworksSite.map(site => (
													<div key={site.id + "site"}>
														x: {site.id + "pwa"}
														{site.title}
													</div>
												))}
											</div>
										)} */}

										{/* <a href={item.image}>{item.title}</a> */}
									</li>
								))}

								<br />
								<br />
							</ul>
						</div>
					</div>

					// <div key={indx + 123} className="resume-main-container">
					// 	<div className="resume-container">
					// 		<div>=-----=| ResumeDataComponent |=----=</div>
					// 		<br />
					// 		<div className="resume-profession">{data.profession}</div>
					// 		<br />
					// 		<div className="resume-address">
					// 			{data.address.street} <br />
					// 			{data.address.city + " "}
					// 			{data.address.state + " "}
					// 			{data.address.zip} <br />
					// 			{data.phone} <br />
					// 			{data.email} <br />
					// 			{/* {data.logo} <br /> */}
					// 			<img alt={data.logo} src={data.url} />
					// 			<img src={require ("./../../assets/images/cupra-racer5.jpg")} width="300" height="auto"/>
					// 			{/* {data.portfolio[0].title} */}
					// 		</div>

					// 		<br />

					// 	</div>
					// </div>
				);
			})}
		</React.Fragment>
	);
}
