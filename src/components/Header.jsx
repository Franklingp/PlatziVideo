import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//styles
import "@styles/components/Header.scss";

//Icons
import logo from "@static/logo-platzi-video-BW2.png";
import userIcon from "@static/user-icon.png";
import gravatar from "@utils/gravatar";

function Header(props) {
	const { user } = props;

	//validate user
	const isUser = Object.keys(user).length > 0;

	return (
		<header className="header">
			<Link to="/">
				<img className="header__img" src={logo} alt="Platzi Video" />
			</Link>
			<div className="header__menu">
				<div className="header__menu--profile">
					{isUser ? (
						<img src={gravatar(user.email)} alt="user" />
					) : (
						<img src={userIcon} alt="user" />
					)}
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

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps)(Header);
