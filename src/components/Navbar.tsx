import "../gridTris.css";
import { ButtonRedresh } from "./ButtonRefresh";

import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

type Navprops = {
	title: string;
};

export const Navbar = (props: Navprops) => {
	const dataPlayers = useContext(PlayerContext);
	const [current, setCurrent] = useState(0);

	const changeCurrent = (): void => {
		if (dataPlayers.player === 1) {
			setCurrent(1);
		} else if (dataPlayers.player === 2) {
			setCurrent(2);
		}
	};

	useEffect(() => {
		changeCurrent();
	}, [dataPlayers.player]);

	return (
		<div className="backgroundNav">
			<h1>{props.title}</h1>
			<div className="containerPlayerNav">
				{current === 1 ? (
					<div className="playerCurrent">
						<p>Giocatore 1</p>
						<h2>X</h2>
					</div>
				) : (
					""
				)}

				<ButtonRedresh />
				{current === 2 ? (
					<div className="playerCurrent">
						<p>Giocatore 2</p>
						<h2>O</h2>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};
