import "../assets/styles/president.css";
import Abstraction from "../assets/images/abstraction_1.0.jpg";
import Disrupt from "../assets/images/disrupt.jpg";
import Women from "../assets/images/women_in_tech.png";
import Spotlight from "../assets/images/Spotlight.jpg";
import Welcome from "../assets/images/welcome.jpg";
import $ from "jquery";
$(document).ready(function () {
	$("#sidebarCollapse").on("click", function () {
		$("#sidebar").toggleClass("active");
	});
});

function President() {
	return (
		<div className="wrapper">
			<nav id="sidebar">
				<div className="sidebar-header">
					<h3>ABC CLUB</h3>
				</div>

				<ul className="list-unstyled components">
					<li>
						<a
							href="#homeSubmenu"
							data-toggle="collapse"
							aria-expanded="false"
							className="dropdown-toggle"
						>
							Team members
						</a>
						<ul className="collapse list-unstyled" id="homeSubmenu">
							<li>
								<a href="register">abc</a>
							</li>
							<li>
								<a href="register">xyz</a>
							</li>
							<li>
								<a href="register">lmn</a>
							</li>
						</ul>
					</li>

					<li>
						<a
							href="#pageSubmenu"
							data-toggle="collapse"
							aria-expanded="false"
							className="dropdown-toggle"
						>
							Events
						</a>
						<ul className="collapse list-unstyled" id="pageSubmenu">
							<li>
								<a href="register">Event 1</a>
							</li>
							<li>
								<a href="register">Event 2</a>
							</li>
							<li>
								<a href="register">Event 3</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="register">Create a form</a>
					</li>
				</ul>

				<ul className="list-unstyled CTAs">
					<li>
						<a href="register" className="download">
							Schedules
						</a>
					</li>
				</ul>
			</nav>

			<div id="content">
				<div className="inner-content">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="container-fluid">
							<button type="button" id="sidebarCollapse" className="btn">
								<i className="fas fa-align-left"></i>
							</button>
						</div>
					</nav>

					<div className="profile m-3 mb-5 p-2 ">
						<img src={Welcome} alt="" />
						<span className="text-white top-welcome">Welcome president!</span>
					</div>

					<div className="events mx-5">
						<div className="card mb-5">
							<img src={Abstraction} className="card-img-top " alt="..." />
							<div className="card-body">
								<p className="card-text">
									The first part was an online elocution contest conducted on
									the morning of 27th March, 2021.
								</p>
								<button className="btn">Create a form</button>
							</div>
						</div>

						<div className="card mx-5 mb-5">
							<img src={Disrupt} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									Women in Tech, a webinar was organized by the SVCE ACM -W
									Student Chapter. It was conducted on 10th September, 2020.
								</p>
								<button className="btn">Create a form</button>
							</div>
						</div>

						<div className="card mx-5 mb-5">
							<img src={Women} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									The SVCE ACM Student Chapter conducted its first event for the
									AY 2020-21, Abstraction 1.0, on the 29th of August (Saturday).
								</p>
								<button className="btn">Create a form</button>
							</div>
						</div>

						<div className="card mb-5">
							<img src={Spotlight} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									Disrupt is a technical debate contest which was conducted for
									the 4th time by SVCE ACM Student Chapter on 14th Feb, 2021.
								</p>
								<button className="btn">Create a form</button>
							</div>
						</div>
					</div>
				</div>
				<footer className="footer">
					<span>© CLUB-NAME 2022. All Rights Reserved.</span>
				</footer>
			</div>
		</div>
	);
}

export default President;
