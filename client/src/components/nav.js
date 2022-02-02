import React, { useState } from "react";
import Popup from "./popup";

function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const togglePopup = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<a className="navbar-brand" href="a">
					CLUB NAME
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="a"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<i className="fas fa-tasks me-2"></i>Programs
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a className="dropdown-item" href="a">
										Event - 1
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="a">
										Event - 2
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="a">
										Event - 3
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="a">
								<i className="fas fa-info-circle me-2"></i>Get to know us
							</a>
						</li>
					</ul>

					<a className="nav-link notify-icon" href="a">
						<span className="fas fa-cog"></span>
					</a>
					<a className="nav-link notify-icon" href="a">
						<span className="far fa-user-circle"></span>
					</a>
					<a
						href="#pageSubmenu"
						className="nav-link notify-icon"
						onClick={togglePopup}
					>
						<span className="far fa-bell"></span>
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
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
