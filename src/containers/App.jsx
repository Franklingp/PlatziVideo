import React from "react";

//Components
import Header from "@components/Header";
import Search from "@components/Search";
import Categories from "@components/Categories";
import Carousel from "@components/Carousel";
import CarouselItem from "@components/CarouselItem";

//styles
import "../assets/styles/App.scss";

export default function App() {
	return (
		<div id="App">
			<Header />
			<Search />

			<Categories>
				<Carousel>
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
				</Carousel>
			</Categories>
		</div>
	);
}
