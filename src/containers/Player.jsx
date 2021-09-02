import React from "react";
import "@styles/components/Player.scss";

export default function Player(props) {
	const { history } = props;

	const handleBack = () => history.goBack();

	return (
		<div className="Player">
			<video className="video" className autoPlay controls>
				<source src="" />
			</video>
			<div className="Player-back">
				<button type="button" onClick={handleBack}>
					Volver al home
				</button>
			</div>
		</div>
	);
}
