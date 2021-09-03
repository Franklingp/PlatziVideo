import React from "react";

//Component
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className="App">
			{children}
			<Footer />
		</div>
	);
}
