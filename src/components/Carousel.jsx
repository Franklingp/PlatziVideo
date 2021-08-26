import React from "react";

//styles
import "@styles/components/Carousel.scss";

export default function Carousel({ children }) {
	return (
		<section class="carousel">
			<div class="carousel__container">{children}</div>
		</section>
	);
}
