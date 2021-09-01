import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@styles/components/Login.scss";

//Icons
import googldeIcon from "@static/google-icon.png";
import twitterIcon from "@static/twitter-icon.png";

//redux
import { connect } from "react-redux";
import { loginRequest } from "../actions";

function Login(props) {
	const { loginRequest, history } = props;
	const [form, setValue] = useState({
		email: "",
		password: "",
	});

	//Handle form state
	const handleChange = (event) => {
		setValue({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	//handle form submit
	const handleSubmit = (event) => {
		event.preventDefault();
		loginRequest(form);
		history.push("/");
	};

	return (
		<section className="login">
			<section className="login__container">
				<h2>Inicia sesión</h2>
				<form className="login__container--form" onSubmit={handleSubmit}>
					<input
						className="input"
						type="text"
						placeholder="Correo"
						name="email"
						value={form.email}
						onChange={handleChange}
					/>
					<input
						className="input"
						type="password"
						placeholder="Contraseña"
						name="password"
						value={form.password}
						onChange={handleChange}
					/>
					<button className="button" type="submit">
						Iniciar sesión
					</button>
					<div className="login__container--remember-me">
						<label>
							<input type="checkbox" id="cbox1" value="first_checkbox" />
							Recuérdame
						</label>
						<a href="/">Olvidé mi contraseña</a>
					</div>
				</form>
				<section className="login__container--social-media">
					<div>
						<img src={googldeIcon} /> Inicia sesión con Google
					</div>
					<div>
						<img src={twitterIcon} /> Inicia sesión con Twitter
					</div>
				</section>
				<p className="login__container--register">
					No tienes ninguna cuenta
					<Link to="/register">Registrate</Link>
				</p>
			</section>
		</section>
	);
}

const mapDispatchToProps = {
	loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
