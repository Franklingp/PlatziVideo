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

export default function App() {
	const [videos, setVideos] = useState({});

	//method to get info from fake api
	const getInfo = () => {
		fetch("http://localhost:3000/initalState")
			.then((response) => response.json())
			.then((data) => setVideos(data))
			.catch((e) => {
				alert("Hubo un error al intentar obtener la informacion del api");
				console.log(e);
			});
	};

	useEffect(() => {
		getInfo();
	}, []);

	return (
		<div id="App">
			<Header />
			<Search />

			<Categories title={"Mi lista"}>
				<Carousel>
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
				</Carousel>
			</Categories>

			<Categories title={"Tendencias"}>
				<Carousel>
					<CarouselItem />
					<CarouselItem />
				</Carousel>
			</Categories>

			<Categories title={"Originales de Platzi video"}>
				<Carousel>
					<CarouselItem />
					<CarouselItem />
					<CarouselItem />
				</Carousel>
			</Categories>

			<Footer />
		</div>
	);
}
