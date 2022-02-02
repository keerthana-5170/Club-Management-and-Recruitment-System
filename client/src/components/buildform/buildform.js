import React from "react";
import "../../assets/styles/build.css";
import { Component } from "react/cjs/react.production.min";

class BuildForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newItem: "",
			list: [],
		};
	}
	updateInput(key, value) {
		this.setState({
			[key]: value,
		});
	}
	addItem() {
		const newItem = {
			id: 1 * Math.random(),
			value: this.state.newItem.slice(),
		};

		const list = [...this.state.list];

		list.push(newItem);
		this.setState({
			list,
			newItem: "",
		});
	}
	deleteItem(id) {
		const list = [...this.state.list];
		const updatedList = list.filter((item) => item.id !== id);
		this.setState({ list: updatedList });
	}
	render() {
		return (
			<div className="build">
				<div className="text-white fw-bold m-5 build-title">Create a form</div>
				<a href="president" className="text-white build-icon">
					<span className="fas fa-home "></span>
				</a>
				<div>
					<input
						type="text"
						placeholder="Add your field"
						value={this.state.newItem}
						className="me-3 build-input p-2"
						onChange={(e) => this.updateInput("newItem", e.target.value)}
					/>
					<button onClick={() => this.addItem()} className="build-btn p-2">
						Add
					</button>
				</div>
				<ul className="build-ul">
					{this.state.list.map((item) => {
						return (
							<div className="build-fields">
								<label key={item.id} className="text-white mb-2">
									{item.value}
								</label>
								<div>
									<input type="text" className="build-input p-2 me-2" />
									<button
										onClick={() => this.deleteItem(item.id)}
										className="build-btn p-2 mt-2"
									>
										X
									</button>
								</div>
							</div>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default BuildForm;
