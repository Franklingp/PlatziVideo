import React from "react";
import classNames from "classnames";

//styles
import "../assets/styles/components/Search.scss";

export default function Search({ isHome }) {
	//Input classname validation
	const inputClass = classNames("input", {
		isHome,
	});

	return (
		<section className="main">
			<h2 className="main__title">¿Qué quieres ver hoy?</h2>
			<input type="text" className={inputClass} placeholder="Buscar..." />
		</section>
	);
}
