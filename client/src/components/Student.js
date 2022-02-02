import "../assets/styles/student.css";
import Nav from "./nav";
import Events from "./Student/Events";
import Greeting from "./Student/Greeting";
import Upcoming from "./Student/Upcoming";
import Regevents from "./Student/Regevents";
import Footer from "./footer";
function Student() {
	return (
		<div>
			<Nav />
			<Events />
			<Greeting />
			<Upcoming />
			<Regevents />
			<Footer />
		</div>
	);
}

export default Student;
