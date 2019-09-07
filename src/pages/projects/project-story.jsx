import React from "react";
import "./project-story.scss";
import { Container, Row, Col } from "react-bootstrap";
import FooterComponent from './../../components/footer';
// import { Container, Row, Col, Button } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.css';
import CarImage from './../../assets/images/cupra-racer5.jpg';
import WomanImage from './../../assets/images/inspirational/woman.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	cardContainer: {
		// display: 'flex',
		// alignItems: 'center',
		// justifyContent: 'center',
		// left: 200,
		padding: '20px 0px 120px 0px'
	},
	cardFontMerri: {
		fontFamily: 'var(--rlg-font-Merriweather)',
		color: 'var(--rlg-color-primary-shade)'
	},
	card: {
		display: 'inline-flex',
		// alignItems: 'center',
		// justifyContent: 'center',
		flexDirection: "column",
		// alignSelf: 'center',
		borderRadius: 5,
		maxWidth: 345
	},
	media: {
	  height: 200,
	  backgroundSize: '200%',
	  backgroundPositionY: '40%'
	},

 });

// export default class ProjectStoryComponent extends React.Component {
// 	render() {
	export default function ProjectStoryComponent() {

		const classes = useStyles();

		return (

			<React.Fragment>
				<div className={classes.cardContainer}>
				{/* <div inset
					classes={{
						inset: [classes.cardContainer, "cardKontainer"]
					}}
				> */}
					<Card className={classes.card}>
						<CardActionArea>
						<CardMedia
							className={classes.media}
							image={WomanImage} //"/static/images/cards/contemplative-reptile.jpg"
							// image="./../../assets/images/cupra-racer5.jpg"
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2" className={classes.cardFontMerri}>
								Loretta
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p" className={classes.cardFontMerri}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempora repellendus veniam voluptas doloremque tempore id nihil unde iste dolores.
							</Typography>
						</CardContent>
						</CardActionArea>
						<CardActions>
						<Button size="small" color="primary">
							Share
						</Button>
						<Button size="small" color="primary">
							Learn More
						</Button>
						</CardActions>
					</Card>
				</div>
			</React.Fragment>

				// <Container className="projStory-container">

				// 	<Row className="projStory-row1">
				// 		{/* <Col className="dev-border">1 of 3</Col> */}
				// 		<Col className="dev-border projStory-image-cover"></Col>
				// 		<Col className="dev-border" xs={7}>
				// 			<div className="projStory-title">Code Transformations</div>
				// 			<p className="projStory-info">
				// 			React Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
				// 			architecto animi natus recusandae consequuntur nisi saepe minima in,
				// 			eaque tenetur dolore amet assumenda distinctio fugit dolorum, quidem
				// 			reprehenderit corrupti perferendis. Corporis, dolor natus! At atque
				// 			rem eos ducimus voluptatum doloribus natus, alias quaerat aspernatur
				// 			eligendi voluptas aliquam sunt rerum sit libero sequi sapiente
				// 			dicta. Quae accusantium cupiditate, ut dolor debitis labore et autem
				// 			dolorum eius fuga animi cumque recusandae architecto at earum dolore
				// 			suscipit nulla unde quam expedita soluta iure aliquid officiis!
				// 			Excepturi, incidunt! Eius adipisci est ipsum. Architecto,
				// 			perspiciatis earum odit, fugit optio nulla magni autem hic quod
				// 			perferendis quia distinctio assumenda. Quae ullam similique in a
				// 			veniam officia tempora, debitis vero voluptates nulla alias,
				// 			incidunt tempore ipsa perspiciatis!
				// 			</p>
				// 		</Col>

				// 		<Col xs={12} className="projStory-footer">
				// 			<FooterComponent />
				// 		</Col>

				// 	</Row>
					
				// </Container>

		);
// 	}
}
