import React from "react";

//Components
import Search from "@components/Search";
import Categories from "@components/Categories";
import Carousel from "@components/Carousel";
import CarouselItem from "@components/CarouselItem";

//styles
import "@styles/App.scss";

//Custom hooks
import useInitialState from "../customhooks/useInitialState";

const API = "http://localhost:3000/initalState";

export default function Home() {
	const [videos, setVideos] = useInitialState(API);

	//Loading state
	if (videos === null) {
		return <h1>Loading</h1>;
	}

	return (
		<>
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

			<Categories title={"Tendencias"}>
				<Carousel>
					{videos.trends.map((element) => (
						<CarouselItem key={element.id} {...element} />
					))}
				</Carousel>
			</Categories>

			<Categories title={"Originales de Platzi video"}>
				<Carousel>
					{videos.originals.map((element) => (
						<CarouselItem key={element.id} {...element} />
					))}
				</Carousel>
			</Categories>
		</>
	);
}
