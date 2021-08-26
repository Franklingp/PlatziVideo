import React, { useState, useEffect } from "react";

//Components
import Header from "@components/Header";
import Search from "@components/Search";
import Categories from "@components/Categories";
import Carousel from "@components/Carousel";
import CarouselItem from "@components/CarouselItem";
import Footer from "../components/Footer";

//styles
import "../assets/styles/App.scss";

//Custom hooks
import useInitialState from "../customhooks/useInitialState";

const API = "http://localhost:3000/initalState";

export default function App() {
	const [videos, setVideos] = useInitialState(API);

	//Loading state
	if (videos === null) {
		return <h1>Loading</h1>;
	}

	return (
		<div id="App">
			<Header />
			<Search />

			{videos.mylist.length > 1 && (
				<Categories title={"Mi lista"}>
					<Carousel>
						{videos.mylist.map((element) => (
							<CarouselItem key={element.id} {...element} />
						))}
					</Carousel>
				</Categories>
			)}

			{videos.trends.length > 1 && (
				<Categories title={"Tendencias"}>
					<Carousel>
						{videos.trends.map((element) => (
							<CarouselItem key={element.id} {...element} />
						))}
					</Carousel>
				</Categories>
			)}

			{videos.originals.length > 1 && (
				<Categories title={"Originales de Platzi video"}>
					<Carousel>
						{videos.originals.map((element) => (
							<CarouselItem key={element.id} {...element} />
						))}
					</Carousel>
				</Categories>
			)}

			<Footer />
		</div>
	);
}
