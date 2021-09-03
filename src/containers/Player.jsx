import React, { useEffect } from "react";
import "@styles/components/Player.scss";
import { connect } from "react-redux";

//components
import NotFound from "../containers/NotFound";

//actions
import { getSourceVideo } from "../actions";

function Player(props) {
	const { history, getSourceVideo, playing } = props;
	const { id } = props.match.params;
	const hasVideo = Object.keys(playing).length > 0;

	//Return to the last page
	const handleBack = () => history.goBack();

	//Get source
	useEffect(() => {
		getSourceVideo(id);
	}, []);

	return hasVideo ? (
		<div className="Player">
			<video className="video" autoPlay controls>
				<source src={playing.source} />
			</video>
			<div className="Player-back">
				<button type="button" onClick={handleBack}>
					Volver al home
				</button>
			</div>
		</div>
	) : (
		<NotFound />
	);
}

const mapStateToProps = (state) => ({
	playing: state.playing,
});

const mapDispatchToProps = {
	getSourceVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
