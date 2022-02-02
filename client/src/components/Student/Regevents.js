import React from "react";
import Spotlight from "../../assets/images/gmeet.jpg";
import Women from "../../assets/images/hack.jpg";

function Regevents() {
	return (
		<div>
			<h4 className="welcome mx-5 my-3 mt-5 text-white">Registered events</h4>

			<div className="events mx-5">
				<div className="card mb-5">
					<img src={Spotlight} className="card-img-top" alt="..." />
					<div className="card-body">
						<p className="card-text">
							The first part was an online elocution contest conducted on the
							morning of 27th March, 2021.
						</p>
					</div>
				</div>

				<div className="card mx-5 mb-5">
					<img src={Women} className="card-img-top" alt="..." />
					<div className="card-body">
						<p className="card-text">
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
