import React from "react";
import { connect } from "react-redux";

//Components
import Search from "@components/Search";
import Categories from "@components/Categories";
import Carousel from "@components/Carousel";
import CarouselItem from "@components/CarouselItem";
import Header from "../components/Header";

//styles
import "@styles/App.scss";

function Home({ myList, originals, trends, search }) {
	return (
		<>
			<Header />
			<Search isHome />
			{search.input !== "" && (
				<Categories
					title={
						search.list.length === 0 ? "Busqueda no encontrada" : "Busqueda"
					}
				>
					{
						<Carousel>
							{search.list.map((element) => (
								<CarouselItem key={element.id} {...element} isList />
							))}
						</Carousel>
					}
				</Categories>
			)}

			{myList.length > 0 && (
				<Categories title={"Mi lista"}>
					<Carousel>
						{myList.map((element) => (
							<CarouselItem key={element.id} {...element} isList />
						))}
					</Carousel>
				</Categories>
			)}

			<Categories title={"Tendencias"}>
				<Carousel>
					{trends.map((element) => (
						<CarouselItem key={element.id} {...element} />
					))}
				</Carousel>
			</Categories>

			<Categories title={"Originales de Platzi video"}>
				<Carousel>
					{originals.map((element) => (
						<CarouselItem key={element.id} {...element} />
					))}
				</Carousel>
			</Categories>
		</>
	);
}

const mapStateToProps = (state) => ({
	search: state.search,
	myList: state.myList,
	originals: state.originals,
	trends: state.trends,
});

export default connect(mapStateToProps, null)(Home);
