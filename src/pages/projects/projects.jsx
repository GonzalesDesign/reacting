import React from "react";
import './projects.scss'
import ProjectStoryComponent from './project-story';
// import MainFeatureComponent from './main-feature';

export default function ProjectsComponent() {

	return(
		
		<React.Fragment>

			<div className="projects-main-container">

				<div className="projects-image-container">
					<span className="projects-image-title">PROJECTS COMPONENT WORKS!</span>
				</div>
			</div>

			{/* ---= Element: ProjectStoryComponent =--- */}
			<ProjectStoryComponent/>

		</React.Fragment>
	)
}
