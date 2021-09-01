import React from "react";
import { Link } from "react-router-dom";

//styles
import "@styles/components/Header.scss";

//Icons
import logo from "@static/logo-platzi-video-BW2.png";
import userIcon from "@static/user-icon.png";

export default function Header() {
	return (
		<header className="header">
			<Link to="/">
				<img className="header__img" src={logo} alt="Platzi Video" />
			</Link>
			<div className="header__menu">
				<div className="header__menu--profile">
					<img src={userIcon} alt="user" />
					<p>Perfil</p>
				</div>
				<ul>
					<li>
						<a href="/">Cuenta</a>
					</li>
					<li>
						<Link to="/login">Iniciar sesion</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
