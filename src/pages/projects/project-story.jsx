import React from "react";
import "./project-story.scss";
import { Container, Row, Col } from "react-bootstrap";
// import { Container, Row, Col, Button } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.css';

// export default class ProjectStoryComponent extends React.Component {
// 	render() {
	export default function ProjectStoryComponent() {

		return (

				<Container className="projStory-container">

					<Row className="projStory-row1">
						{/* <Col className="dev-border">1 of 3</Col> */}
						<Col className="dev-border projStory-image-cover"></Col>
						<Col className="dev-border" xs={7}>
							<div className="projStory-title">Code Transformations</div>
							<p className="projStory-info">
							React Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							architecto animi natus recusandae consequuntur nisi saepe minima in,
							eaque tenetur dolore amet assumenda distinctio fugit dolorum, quidem
							reprehenderit corrupti perferendis. Corporis, dolor natus! At atque
							rem eos ducimus voluptatum doloribus natus, alias quaerat aspernatur
							eligendi voluptas aliquam sunt rerum sit libero sequi sapiente
							dicta. Quae accusantium cupiditate, ut dolor debitis labore et autem
							dolorum eius fuga animi cumque recusandae architecto at earum dolore
							suscipit nulla unde quam expedita soluta iure aliquid officiis!
							Excepturi, incidunt! Eius adipisci est ipsum. Architecto,
							perspiciatis earum odit, fugit optio nulla magni autem hic quod
							perferendis quia distinctio assumenda. Quae ullam similique in a
							veniam officia tempora, debitis vero voluptates nulla alias,
							incidunt tempore ipsa perspiciatis!
							</p>
						</Col>
					</Row>
					
				</Container>

		);
// 	}
}
