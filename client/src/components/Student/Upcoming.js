import React from "react";
import Abstraction from "../../assets/images/abstraction_1.0.jpg";
import Disrupt from "../../assets/images/disrupt.jpg";
import Women from "../../assets/images/women_in_tech.png";
import Spotlight from "../../assets/images/Spotlight.jpg";

function Upcoming() {
	return (
		<div class="events mx-5">
			<div class="card mb-5">
				<img src={Spotlight} class="card-img-top" alt="..." />
				<div class="card-body">
					<p class="card-text">
						The first part was an online elocution contest conducted on the
						morning of 27th March, 2021.
					</p>
					<button class="btn">Register</button>
				</div>
			</div>

			<div class="card mx-5 mb-5">
				<img src={Women} class="card-img-top" alt="..." />
				<div class="card-body">
					<p class="card-text">
						Women in Tech, a webinar was organized by the SVCE ACM -W Student
						Chapter. It was conducted on 10th September, 2020.
					</p>
					<button class="btn">Register</button>
				</div>
			</div>

			<div class="card mx-5 mb-5">
				<img src={Abstraction} class="card-img-top" alt="..." />
				<div class="card-body">
					<p class="card-text">
						The SVCE ACM Student Chapter conducted its first event for the AY
						2020-21, Abstraction 1.0, on the 29th of August (Saturday).
					</p>
					<button class="btn">Register</button>
				</div>
			</div>

			<div class="card mb-5">
				<img src={Disrupt} class="card-img-top" alt="..." />
				<div class="card-body">
					<p class="card-text">
						Disrupt is a technical debate contest which was conducted for the
						4th time by SVCE ACM Student Chapter on 14th Feb, 2021.
					</p>
					<button class="btn">Register</button>
				</div>
			</div>
		</div>
	);
}

export default Upcoming;
