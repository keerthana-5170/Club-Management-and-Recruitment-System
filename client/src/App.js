import "./App.css";
import Login from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";
import Student from "./components/Student";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import President from "./components/President";
import React from "react";
import BuildForm from "./components/buildform/buildform";
import RecruitmentForm from "./components/Recruitmentform";

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/register" element={<RegistrationForm />} />
					<Route path="" element={<Login />} />
					<Route path="/president" element={<President />} />
					<Route path="/student" element={<Student />} />
					<Route path="/createform" element={<BuildForm />} />
					<Route path="/recruitment" element={<RecruitmentForm />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
