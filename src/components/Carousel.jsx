import React from "react";

//styles
import "@styles/components/Carousel.scss";

export default function Carousel({ children }) {
	return (
		<section className="carousel">
			<div className="carousel__container">{children}</div>
		</section>
	);
}
