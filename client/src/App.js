import "./App.css";
import Login from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";
import Student from "./components/Student";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import President from "./components/President";

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/register" element={<RegistrationForm />} />
					<Route path="/login" element={<Login />} />
					<Route path="/president" element={<President />} />
					<Route path="/student" element={<Student />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
