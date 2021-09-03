import React from "react";
import { Link } from "react-router-dom";

//styles
import "@styles/components/NotFound.scss";

export default function NotFound() {
	return (
		<div className="notFound-container">
			<h1 className="notFound-title">404: Ups no se ha encontrado la ruta</h1>
			<Link className="notFound-link" to="/">
				Volver al Home
			</Link>
		</div>
	);
}
