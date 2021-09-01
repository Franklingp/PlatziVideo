import React from "react";

//Component
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className="App">
			<Header />
			{children}
			<Footer />
		</div>
	);
}
