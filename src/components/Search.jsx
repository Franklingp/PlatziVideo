import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//styles
import "../assets/styles/components/Search.scss";

//actions
import { setSearch } from "../actions";

function Search({ isHome, setSearch }) {
	//Input classname validation
	const inputClass = classNames("input", {
		isHome,
	});

	//Handle search
	const handleChange = (e) => {
		setSearch(e.target.value);
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

//Prop types
Search.propTypes = {
	isHome: PropTypes.bool,
	setSearch: PropTypes.func.isRequired,
};

const mapDisplayToProps = {
	setSearch,
};

export default connect(null, mapDisplayToProps)(Search);
