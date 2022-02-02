import "../assets/styles/president.css";
import Abstraction from "../assets/images/conf-workshop.jpg";
import Disrupt from "../assets/images/gmeet.jpg";
import Women from "../assets/images/hack.jpg";
import Spotlight from "../assets/images/Spotlight.jpg";
import Welcome from "../assets/images/welcome.jpg";
import $ from "jquery";
import { useState } from "react";
import Popup from "./popup";

$(document).ready(function () {
	$("#sidebarCollapse").on("click", function () {
		$("#sidebar").toggleClass("active");
	});
});

function President() {
	const [isOpen, setIsOpen] = useState(false);
	const togglePopup = () => {
		setIsOpen(!isOpen);
	};
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
								<a href="#homeSubmenu">abc</a>
							</li>
							<li>
								<a href="#homeSubmenu">xyz</a>
							</li>
							<li>
								<a href="#homeSubmenu">lmn</a>
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
								<a href="#pageSubmenu">Event 1</a>
							</li>
							<li>
								<a href="#pageSubmenu">Event 2</a>
							</li>
							<li>
								<a href="#pageSubmenu">Event 3</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="recruitment">Create a recruitment form</a>
					</li>
				</ul>

				<ul className="list-unstyled CTAs">
					<li>
						<button className="schedules" onClick={togglePopup}>
							Schedules
							{isOpen && (
								<Popup
									content={
										<>
											<b>Calendar Events</b>

											<div class="jzdbox1 jzdbasf jzdcal">
												<div class="jzdcalt">September 2022</div>

												<span>Su</span>
												<span>Mo</span>
												<span>Tu</span>
												<span>We</span>
												<span>Th</span>
												<span>Fr</span>
												<span>Sa</span>

												<span class="jzdb"></span>
												<span class="jzdb"></span>
												<span class="jzdb"></span>
												<span class="jzdb"></span>
												<span class="jzdb"></span>
												<span class="jzdb"></span>
												<span>1</span>
												<span>2</span>
												<span>3</span>
												<span>4</span>
												<span>5</span>
												<span>6</span>
												<span>7</span>
												<span>8</span>
												<span>9</span>
												<span class="circle" data-title="Event 1">
													10
												</span>
												<span>11</span>
												<span>12</span>
												<span>13</span>
												<span>14</span>
												<span>15</span>
												<span>16</span>
												<span>17</span>
												<span>18</span>
												<span class="circle" data-title="Event 2">
													19
												</span>
												<span>20</span>
												<span>21</span>
												<span>22</span>
												<span>23</span>
												<span>24</span>
												<span>25</span>
												<span>26</span>
												<span>27</span>
												<span>28</span>
												<span>29</span>
												<span class="circle" data-title="Event 3">
													30
												</span>
												<span class="jzdb"></span>
												<span class="jzdb"></span>
												<span class="jzdb"></span>
												<span class="jzdb"></span>
												<span class="jzdb"></span>
												<span class="jzdb"></span>
											</div>

											{/* <button>Close</button> */}
										</>
									}
									handleClose={togglePopup}
								/>
							)}
						</button>
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
								<a href="createform" className="btn">
									Create a form
								</a>
							</div>
						</div>

						<div className="card mx-5 mb-5">
							<img src={Disrupt} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									Women in Tech, a webinar was organized by the SVCE ACM -W
									Student Chapter. It was conducted on 10th September, 2020.
								</p>
								<a href="createform" className="btn">
									Create a form
								</a>
							</div>
						</div>

						<div className="card mx-5 mb-5">
							<img src={Women} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									The SVCE ACM Student Chapter conducted its first event for the
									AY 2020-21, Abstraction 1.0, on the 29th of August (Saturday).
								</p>
								<a href="createform" className="btn">
									Create a form
								</a>
							</div>
						</div>

						<div className="card mb-5">
							<img src={Spotlight} className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									Disrupt is a technical debate contest which was conducted for
									the 4th time by SVCE ACM Student Chapter on 14th Feb, 2021.
								</p>
								<a href="createform" className="btn">
									Create a form
								</a>
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
