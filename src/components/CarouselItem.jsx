import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//styles
import "@styles/components/CarouselItem.scss";

//Iocns
import playIcon from "@static/play-icon.png";
import plusIcon from "@static/plus-icon.png";
import removeIcon from "@static/remove-icon.png";

//Redux
import { setFavorite, deleteFavorite } from "../actions";

function CarouselItem(props) {
	const {
		id,
		title,
		year,
		duration,
		cover,
		contentRating,
		setFavorite,
		deleteFavorite,
		isList,
	} = props;

	//Metod to set favorite
	const hanldeSetFavorite = () => {
		setFavorite({ id, title, year, duration, cover, contentRating });
	};

	//Metodo to delete a movie from favorites
	const handleDeleteFavorite = () => {
		deleteFavorite(id);
	};

	return (
		<div className="carousel-item">
			<img className="carousel-item__img" src={cover} alt={title} />
			<div className="carousel-item__details">
				<div>
					<Link to={`/player/${id}`}>
						<img
							className="carousel-item__details--img"
							src={playIcon}
							alt="Play Icon"
						/>
					</Link>
					{isList ? (
						<img
							className="carousel-item__details--img"
							src={removeIcon}
							alt="Remove Icon"
							onClick={handleDeleteFavorite}
						/>
					) : (
						<img
							className="carousel-item__details--img"
							src={plusIcon}
							alt="Plus Icon"
							onClick={hanldeSetFavorite}
						/>
					)}
				</div>
				<p className="carousel-item__details--title">{title}</p>
				<p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration} minutes`}</p>
			</div>
		</div>
	);
}

//Prop types
CarouselItem.propTypes = {
	title: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	duration: PropTypes.number.isRequired,
	cover: PropTypes.string.isRequired,
	contentRating: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
	setFavorite,
	deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
