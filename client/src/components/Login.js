import React from "react";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user.png";
import "../assets/styles/login.css";
import { useState } from "react";
import Axios from "axios";

function Login() {
	const [username, setusername] = useState("");
	const [password, setpassword] = useState("");
	const [usertype, setusertype] = useState("President");
	const onChangeHandler = (fieldName, value) => {
		if (fieldName === "username") {
			setusername(value);
		} else if (fieldName === "password") {
			setpassword(value);
		} else if (fieldName === "usertype") {
			setusertype(value);
		}
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (username.trim() === "" || password.trim() === "") {
			alert("required both field");
		} else {
			if (
				username === "admin@abc.com" &&
				password === "$abc@svce22" &&
				usertype === "President"
			) {
				alert("Successfully Logged in!!");
				setusername("");
				setpassword("");
			} else {
				alert("Incorrect Login!!");
			}
		}
	};
	const handleClick = () => {
		Axios.post("http://localhost:3001/validate",{username:username,password:password});
	 }
	return (
		<div className="black-bubble">
			<div className="header">
				<img src={logo} alt="logo" className="logo"></img>
				<h2 className="logo-head">ABC Club</h2>
			</div>
			<div className="bubble-center">
				<h2 className="bubble-heading">
					{" "}
					WELCOME TO ABC CLUB <br /> OF SVCE
				</h2>
				<p className="bubble-para">
					Lorem ipsum urabitur a euismod lorem, nec <br />
					laoreet tellus.{" "}
				</p>
			</div>
			 <form
				className="loginform"
			>
				<div>
					<h2>LOGIN</h2>
					<p>Enter your details below</p>
				</div>
				<img src={user} alt="user" className="user-img"></img>
				<select
					className="text-white"
					name="user-type"
					onChange={(e) => onChangeHandler("usertype", e.target.value)}
				>
					<option value="Select-User" className="text-black">
						Select User
					</option>
					<option value="President" className="text-black">
						President
					</option>
					<option value="Student" className="text-black">
						Student
					</option>
				</select>{" "}
				<br />
				<input
					type="text"
					name="user"
					placeholder="Username"
					value={username}
					onChange={(e) => {
						onChangeHandler("username", e.target.value);
					}}
				></input>{" "}
				<br />
				<input
					className="text-white"
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={(e) => {
						onChangeHandler("password", e.target.value);
					}}
				></input>
				<br />
				<button onClick={handleClick} className="submit" type="submit">
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
