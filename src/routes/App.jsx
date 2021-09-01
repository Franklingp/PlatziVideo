import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import NotFound from "../containers/NotFound";

export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}
