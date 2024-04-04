import "../gridTris.css";
import { ButtonRedresh } from "./ButtonRefresh";

import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

type Navprops = {
	title: string;
};

export const Navbar = (props: Navprops) => {
	const dataPlayers = useContext(PlayerContext);
	const [current, setCurrent] = useState(dataPlayers.player);

	const changeCurrent = () => {
		if (dataPlayers.player === 1) {
			setCurrent(1);
		} else {
			setCurrent(2);
		}
	};

	useEffect(() => {
		changeCurrent();
	}, [dataPlayers.player, current]);

	return (
		<div className="backgroundNav">
			<h1>{props.title}</h1>
			<div className="containerPlayerNav">
				<div className={current === 1 ? "playerCurrent" : ""}>
					<p>Giocatore 1</p>
					<h2>X</h2>
				</div>

				<ButtonRedresh />

				<div className={current === 2 ? "playerCurrent" : ""}>
					<p>Giocatore 2</p>
					<h2>O</h2>
				</div>
			</div>
		</div>
	);
};
