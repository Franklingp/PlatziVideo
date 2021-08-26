import React from "react";
import PropTypes from "prop-types";

//styles
import "@styles/components/CarouselItem.scss";

//Iocns
import playIcon from "@static/play-icon.png";
import plusIcon from "@static/plus-icon.png";

function CarouselItem({ title, year, duration, cover, contentRating }) {
	return (
		<div className="carousel-item">
			<img className="carousel-item__img" src={cover} alt={title} />
			<div className="carousel-item__details">
				<div>
					<img
						className="carousel-item__details--img"
						src={playIcon}
						alt="Play Icon"
					/>
					<img
						className="carousel-item__details--img"
						src={plusIcon}
						alt="Plus Icon"
					/>
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

export default CarouselItem;
