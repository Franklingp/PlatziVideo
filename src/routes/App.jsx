import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//components
import Home from "../containers/Home";
import Login from "../containers/Login";

export default function App() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
		</BrowserRouter>
	);
}
