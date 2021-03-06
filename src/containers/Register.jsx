import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@styles/components/Register.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//actions
import { registerRequest } from "../actions";

//components
import Header from "../components/Header";

function Register(props) {
	const { registerRequest, history } = props;
	const [form, setValue] = useState({
		nombre: "",
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		setValue({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		registerRequest(form);
		history.push("/");
	};

	return (
		<>
			<Header isRegister />
			<section className="register">
				<section className="register__container">
					<h2>Regístrate</h2>
					<form className="register__container--form" onSubmit={handleSubmit}>
						<input
							className="input"
							type="text"
							placeholder="Nombre"
							name="nombre"
							onChange={handleChange}
						/>
						<input
							className="input"
							type="text"
							placeholder="Correo"
							name="email"
							onChange={handleChange}
						/>
						<input
							className="input"
							type="password"
							placeholder="Contraseña"
							name="password"
							onChange={handleChange}
						/>
						<button className="button" type="submit">
							Registrarme
						</button>
					</form>
					<Link to="/login">Iniciar sesión</Link>
				</section>
			</section>
		</>
	);
}

//PropTypes
Register.propTypes = {
	registerRequest: PropTypes.func.isRequired,
};

//redux
const mapDispatchToProps = {
	registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
