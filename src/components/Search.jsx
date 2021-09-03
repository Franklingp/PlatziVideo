import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";

//styles
import "../assets/styles/components/Search.scss";

//actions
import { setSerach } from "../actions";

function Search({ isHome, setSerach }) {
	//Input classname validation
	const inputClass = classNames("input", {
		isHome,
	});

	//Handle search
	const handleChange = (e) => {
		setSerach(e.target.value);
	};

	return (
		<section className="main">
			<h2 className="main__title">¿Qué quieres ver hoy?</h2>
			<input
				onChange={handleChange}
				type="text"
				className={inputClass}
				placeholder="Buscar..."
			/>
		</section>
	);
}

const mapDisplayToProps = {
	setSerach,
};

export default connect(null, mapDisplayToProps)(Search);
