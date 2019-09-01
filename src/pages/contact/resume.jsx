import React from "react";
import "./resume.scss";
import ResumeData from "./../../assets/data/experience-data.json";

export function ResumeComponent() {
	return (
		<React.Fragment>
			{ResumeData.map((data, indx) => {
				// const {address} = data.address;
				console.log("data: ", data);
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
											<div className="resume-description multi_lines_text"> {item.description} </div>
										</div>
										{/* <a href={item.image}>{item.title}</a> */}
									</li>
								))}{" "}
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
