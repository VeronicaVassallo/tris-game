import "../gridTris.css";

import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { ButtonRedresh } from "./ButtonRefresh";

type Navprops = {
	title: string;
};

export const Navbar = (props: Navprops) => {
	const { current, setCurrent } = useContext(PlayerContext);

	return (
		<div className="backgroundNav">
			<h1>XO</h1>
			<h2>{props.title}</h2>
			<div className="buttonNav">
				<ButtonRedresh />
			</div>
			<div className="containerPlayerNav">
				<div className={current === 1 ? "playerCurrent" : ""}>
					<p>{current === 1 ? "Turno: " : ""}Giocatore 1</p>
					<h2>X</h2>
				</div>
				<div className={current === 2 ? "playerCurrent" : ""}>
					<p>{current === 2 ? "Turno: " : ""}Giocatore 2</p>
					<h2>O</h2>
				</div>
			</div>
		</div>
	);
};
