import React from "react";
import "../assets/styles/recruitment.css";
function RecruitmentForm() {
	return (
		<form className="d-flex align-items-center justify-content-center">
			<a href="president" className="text-white build-icon">
				<span className="fas fa-home "></span>
			</a>
			<div className="r-form d-flex ">
				<h1 className="text-white my-3">Recruitment Form</h1>
				<div className="form-group">
					<label for="exampleFormControlInput11" className="text-white">
						First Name
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput11"
						placeholder="name@example.com"
					/>
				</div>
				<div className="form-group">
					<label for="exampleFormControlInput12" className="text-white">
						Last Name
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput12"
					/>
				</div>
				<div className="form-group">
					<label for="exampleFormControlInput13" className="text-white">
						Personal mail id
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput13"
					/>
				</div>
				<div className="form-group">
					<label for="exampleFormControlInput14" className="text-white">
						College mail id
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput14"
					/>
				</div>
				<div className="form-group">
					<label for="exampleFormControlInput15" className="text-white">
						Register number
					</label>
					<input
						type="number"
						className="form-control"
						id="exampleFormControlInput15"
					/>
				</div>
				<div className="form-group">
					<label for="exampleFormControlSelect1" className="text-white">
						Department
					</label>
					<select className="form-control" id="exampleFormControlSelect1">
						<option>CSE</option>
						<option>ECE</option>
						<option>EEE</option>
						<option>IT</option>
						<option>MECH</option>
					</select>
				</div>
				<div className="form-group">
					<label for="exampleFormControlSelect1" className="text-white">
						Year
					</label>
					<select className="form-control" id="exampleFormControlSelect1">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					</select>
				</div>
				<div className="form-group">
					<label for="exampleFormControlSelect12" className="text-white">
						Section
					</label>
					<select className="form-control" id="exampleFormControlSelect12">
						<option>A</option>
						<option>B</option>
						<option>C</option>
						<option>D</option>
					</select>
				</div>
				<div className=" form-group">
					<label for="exampleFormControlSelect1" className="text-white">
						Languages known
					</label>
					<div className="d-flex flex-row">
						<div className="form-check form-check-inline d-flex align-items-center">
							<input
								className="form-check-input me-2"
								type="checkbox"
								id="inlineCheckbox1"
								value="option1"
							/>

							<label
								className="form-check-label text-white "
								for="inlineCheckbox1"
							>
								English
							</label>
						</div>
						<div className="form-check form-check-inline d-flex align-items-center">
							<input
								className="form-check-input me-2"
								type="checkbox"
								id="inlineCheckbox2"
								value="option1"
							/>

							<label
								className="form-check-label text-white"
								for="inlineCheckbox2"
							>
								Tamil
							</label>
						</div>
						<div className="form-check form-check-inline d-flex align-items-center">
							<input
								className="form-check-input me-2"
								type="checkbox"
								id="inlineCheckbox3"
								value="option1"
							/>

							<label
								className="form-check-label text-white"
								for="inlineCheckbox3"
							>
								Other
							</label>
						</div>
					</div>
				</div>
				<div className="form-group">
					<label for="exampleFormControlTextarea1" className="text-white">
						Area of interests
					</label>
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
					></textarea>
				</div>
				<button className="btn r-btn my-3">Submit</button>
			</div>
		</form>
	);
}

export default RecruitmentForm;
