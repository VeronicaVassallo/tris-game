import "../gridTris.css";
import { ButtonRedresh } from "./ButtonRefresh";

import { useContext, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

type Navprops = {
	title: string;
};

export const Navbar = (props: Navprops) => {
	const dataPlayers = useContext(PlayerContext);

	return (
		<div className="backgroundNav">
			<h1>{props.title}</h1>
			<div className="containerPlayerNav">
				<div>
					<p>Giocatore 1</p>
					<h2>X</h2>
				</div>

				<ButtonRedresh />

				<div>
					<p>Giocatore 2</p>
					<h2>O</h2>
				</div>
			</div>
		</div>
	);
};
