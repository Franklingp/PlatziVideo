import React from "react";

//styles
import "@styles/components/CarouselItem.scss";

//Iocns
import playIcon from "@static/play-icon.png";
import plusIcon from "@static/plus-icon.png";

export default function CarouselItem({
	title,
	year,
	duration,
	cover,
	contentRating,
}) {
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
