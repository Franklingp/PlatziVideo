import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";

//styles
import "@styles/components/Header.scss";

//Icons
import logo from "@static/logo-platzi-video-BW2.png";
import userIcon from "@static/user-icon.png";
import gravatar from "@utils/gravatar";

//actions
import { logoutRequest } from "../actions";

function Header(props) {
	const { user, logoutRequest, isLogin, isRegister } = props;

	//validate user
	const hasUser = Object.keys(user).length > 0;

	//Logout
	const handleLogout = () => {
		logoutRequest({});
		alert("Se ha cerrado sesion exitosamente");
	};

	//validation the background header
	const classHeader = classNames("header", {
		isLogin,
		isRegister,
	});

	return (
		<header className={classHeader}>
			<Link to="/">
				<img className="header__img" src={logo} alt="Platzi Video" />
			</Link>
			<div className="header__menu">
				<div className="header__menu--profile">
					{hasUser ? (
						<img src={gravatar(user.email)} alt="user" />
					) : (
						<img src={userIcon} alt="user" />
					)}
					<p>Perfil</p>
				</div>
				<ul>
					{hasUser ? (
						<>
							<li>
								<a href="/">{user.nombre}</a>
							</li>
							<li>
								<a href="#logout" onClick={handleLogout}>
									Cerrar sesion
								</a>
							</li>
						</>
					) : (
						<li>
							<Link to="/login">Iniciar sesion</Link>
						</li>
					)}
				</ul>
			</div>
		</header>
	);
}

//Prop types
Header.propTypes = {
	user: PropTypes.object.isRequired,
	logoutRequest: PropTypes.func.isRequired,
	isLogin: PropTypes.bool,
	isRegister: PropTypes.bool,
};

//Redux
const mapStateToProps = (state) => ({
	user: state.user,
});

const mapDispatchToProps = {
	logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
