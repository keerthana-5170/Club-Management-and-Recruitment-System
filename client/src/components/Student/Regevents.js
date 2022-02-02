import React from "react";
import Women from "../../assets/images/women_in_tech.png";
import Spotlight from "../../assets/images/Spotlight.jpg";

function Regevents() {
	return (
		<div>
			<h4 class="welcome mx-5 my-3 mt-5 text-white">Registered events</h4>

			<div class="events mx-5">
				<div class="card mb-5">
					<img src={Spotlight} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">
							The first part was an online elocution contest conducted on the
							morning of 27th March, 2021.
						</p>
					</div>
				</div>

				<div class="card mx-5 mb-5">
					<img src={Women} class="card-img-top" alt="..." />
					<div class="card-body">
						<p class="card-text">
							Women in Tech, a webinar was organized by the SVCE ACM -W Student
							Chapter. It was conducted on 10th September, 2020.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Regevents;
