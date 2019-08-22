import React from "react";
import FooterComponent from "../../components/footer";
import "./main-feature.scss";
import Avatar from './../../assets/images/avatar/Bruce.jpg'

export default function MainFeatureComponent() {
	
	const devStyle = {
		border: "1px solid var(--rlg-color-success)"
	}

	return (
		<React.Fragment>
			<div className="main-feature-container">
				<div className="main-feature">
					<span className="ornaments">†</span> Main Feature <span className="ornaments">¢</span>
					<div className="main-feature-title">UI Design & Development</div>
					<div className="main-feature-image-cover">
						<div className="main-feature-image" />
					</div>

					{/*----=| componentize |=----*/}
					<div className="main-feature-author-container">
						<div className="author-avatar-container">
							<img src={Avatar} className="author-avatar" />
						</div>
						<div className="author-name-container">
							<div className="main-feature-author">R.Lloyd Gonzales</div>
							<div className="main-feature-info-date">August 8, 2019</div>
							<div className="author-social-icons">ftv`_3</div>
						</div>
					</div>

					<p className="main-feature-info">
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
						<div className="main-feature-airport-network-image"></div>
					{/* <br/><br/><span className="main-feature-parag-break"></span> */}
						<p className="main-feature-info">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
						impedit dicta doloribus repellat earum hic similique cum quae error
						sunt eius dolorum magni modi laudantium minima autem sequi iure
						blanditiis repellendus, pariatur ratione ea. Repellat illum odit
						temporibus eaque est sit sed beatae magni laboriosam sunt facere
						modi et, voluptate dolore, quod at deleniti officia voluptatem
						distinctio quaerat quos. Fugiat voluptas facere consectetur.
						Repudiandae consequuntur enim labore non in perferendis quisquam qui
						harum sed eveniet itaque rerum id amet voluptas voluptatum saepe at
						soluta consequatur eius, quasi tempora laborum. Nulla optio culpa
						quasi error perferendis voluptate deserunt aliquam ut hic quos
						illum, quis accusantium non esse, assumenda, cum obcaecati?
						Perferendis suscipit est ipsum. Omnis, autem sint. Eius officia
						dolores sequi corporis necessitatibus atque vitae. Non unde cum
						harum similique blanditiis autem modi eveniet deserunt fuga esse
						officiis cupiditate quisquam nemo quo repellat, quibusdam suscipit
						veniam, nihil labore nesciunt? Esse, ea? Suscipit ipsam architecto
						nisi consequuntur maiores impedit. Provident porro rem quo
						blanditiis quos amet at iusto nihil, distinctio, suscipit sed vel ab
						sit natus dolore officia unde adipisci explicabo id tempora modi
						nostrum, non quam voluptate! Adipisci sunt pariatur iste nemo facere
						quam obcaecati accusamus necessitatibus fugit amet repellendus ex,
						eligendi aspernatur omnis illum vero voluptatem eius neque fuga
						tenetur? Illo numquam vero tempore ea. Nulla, cum dicta! Velit
						accusamus aut corporis unde ipsum. Eligendi culpa, corporis et
						quidem eum deleniti inventore iste libero tempore magni dolor,
						possimus voluptas ea nulla harum labore nemo corrupti similique
						sequi maxime doloremque incidunt?
					</p>
					<FooterComponent />
				</div>
			</div>
		</React.Fragment>
	);
}
