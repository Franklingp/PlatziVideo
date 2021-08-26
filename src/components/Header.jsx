import React from "react";

//styles
import "@styles/components/Header.scss";

//Icons
import logo from "@static/logo-platzi-video-BW2.png";
import userIcon from "@static/user-icon.png";

export default function Header() {
	return (
		<header className="header">
			<img className="header__img" src={logo} alt="Platzi Video" />
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
						<a href="/">Cerrar Sesión</a>
					</li>
				</ul>
			</div>
		</header>
	);
}
