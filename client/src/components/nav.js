import React from "react";

function Nav() {
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
					<a className="nav-link notify-icon" href="a">
						<span className="far fa-bell"></span>
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
