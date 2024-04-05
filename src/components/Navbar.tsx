import "../gridTris.css";
import { ButtonRedresh } from "./ButtonRefresh";

import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

type Navprops = {
	title: string;
};

export const Navbar = (props: Navprops) => {
	const { current, setCurrent } = useContext(PlayerContext);

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
