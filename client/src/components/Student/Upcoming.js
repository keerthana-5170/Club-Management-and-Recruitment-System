import React from "react";
import Abstraction from "../../assets/images/conf-workshop.jpg";
import Disrupt from "../../assets/images/gmeet.jpg";
import Women from "../../assets/images/hack.jpg";
import Spotlight from "../../assets/images/Spotlight.jpg";

function Upcoming() {
	return (
		<div className="events mx-5">
			<div className="card mb-5">
				<img src={Spotlight} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">
						The first part was an online elocution contest conducted on the
						morning of 27th March, 2021.
					</p>
					<a href="register" className="btn">
						Register
					</a>
				</div>
			</div>

			<div className="card mx-5 mb-5">
				<img src={Women} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">
						Women in Tech, a webinar was organized by the SVCE ACM -W Student
						Chapter. It was conducted on 10th September, 2020.
					</p>
					<a className="btn" href="register">
						Register
					</a>
				</div>
			</div>

			<div className="card mx-5 mb-5">
				<img src={Abstraction} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">
						The SVCE ACM Student Chapter conducted its first event for the AY
						2020-21, Abstraction 1.0, on the 29th of August (Saturday).
					</p>
					<a className="btn" href="register">
						Register
					</a>
				</div>
			</div>

			<div className="card mb-5">
				<img src={Disrupt} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text">
						Disrupt is a technical debate contest which was conducted for the
						4th time by SVCE ACM Student Chapter on 14th Feb, 2021.
					</p>
					<a href="register" className="btn">
						Register
					</a>
				</div>
			</div>
		</div>
	);
}

export default Upcoming;
