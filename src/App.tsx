import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Loading, Text } from "@geist-ui/core";

function App() {
	setTimeout(() => {
		window.location.href = "https://www.growth-engineering.io";
	}, 2000);

	return (
		<div
			style={{
				height: "100vh",
				background: "black",
			}}
		>
			<Loading />
		</div>
	);
}

export default App;
