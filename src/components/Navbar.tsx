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
				<div
					className={
						current === 1
							? "playerCurrent playerCurrentBase"
							: "playerCurrentBase"
					}
				>
					<p>{current === 1 ? "Tocca: " : ""}Giocatore 1</p>
					<h2>X</h2>
				</div>

				<ButtonRedresh />

				<div className={current === 2 ? "playerCurrent" : ""}>
					<p>{current === 2 ? "Tocca: " : ""}Giocatore 2</p>
					<h2>O</h2>
				</div>
			</div>
		</div>
	);
};
