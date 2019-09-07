import React from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'; //.ts only 
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { Card } from '@material-ui/core/Card';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import RoadImage from './../../assets/images/inspirational/road-0.jpg';
import GothicImage from './../../assets/images/inspirational/fantasy2.jpg';
import { css } from '@emotion/core';
import './project-grid.scss';
import { StylesProvider } from '@material-ui/styles';

/*=-----------------------------------------------=*/
export default function ProjectGridComponent() {
	const classes = useStyles();

	return (
		<React.Fragment>

			<StylesProvider injectFirst>

				<div className={classes.root}>

				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<Card>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={RoadImage} //"/static/images/cards/contemplative-reptile.jpg"
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2" className={classes.cardFontMerri}>
										Road Falling
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p" className={classes.cardFontMerri}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempora repellendus veniam voluptas doloremque tempore id nihil unde iste dolores.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image={GothicImage} //"/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2" className={classes.cardFontMerri}>
									Entrada Riviera
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p" className={classes.cardFontMerri}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempora repellendus veniam voluptas doloremque tempore id nihil unde iste dolores.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.paper}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ex facilis nam voluptates omnis sunt suscipit eaque cum, eligendi odio inventore fuga rerum quasi quia officia, earum quas vero error.</Paper>
					</Grid>

					
				</Grid>
				{/* =------------------------------= */}
				<Grid container spacing={3}>
					<Grid container
						direction="row"
						justify="center"
						alignItems="flex-start">
						GRID WITH BREKPOINTS:
					</Grid>
					
					<Grid item xs={12}>
						<Paper className={classes.paper}>Full Width: xs=12</Paper>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>xs=12 sm=6</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper className={classes.paper}>xs=12 sm=6</Paper>
					</Grid>

					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>xs=6 sm=3</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>xs=6 sm=3</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>xs=6 sm=3</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>xs=6 sm=3</Paper>
					</Grid>

				</Grid>

				</div>

			</StylesProvider>

		</React.Fragment>
	);

}

/*=---------------------------------------=:css */
const useStyles = makeStyles( theme => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2),
		background: 'linear-gradient(45deg, var(--rlg-color-success-shade), transparent)'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
		color: theme.palette.text.secondary,
		textTransform: "uppercase"
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
	//   backgroundSize: '200%',
	  backgroundPositionY: '40%',
	  backgroundSize: 'cover'
	},
}));