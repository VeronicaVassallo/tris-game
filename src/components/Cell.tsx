import React, { useState } from "react";
import "../gridTris.css";

//Context
import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { escape } from "querystring";

type PropsCell = {
	positionCell: number;
};

const Cell = (props: PropsCell) => {
	let dataPlayers = useContext(PlayerContext);
	const cross: string = "X";
	const circle: string = "O";

	const [box, setbox] = useState(0);

	const addSign = (): void => {
		/*Il primo controllo vede se la cella gli è stata gia attribuita un valore, se il
		valore è ancora 0 puo assegnargli la x(1) o il O(2), se box risulta avere un valore diverso da zero
		non deve fare nulla, non ti da la possibilita di cliccare*/
		if (box === 0) {
			if (dataPlayers.player === 1) {
				setbox(1);
			} else if (dataPlayers.player === 2) {
				setbox(2);
			}

			dataPlayers.setPosition(props.positionCell, dataPlayers.player);
			let isWinner = dataPlayers.checkWinner(dataPlayers.player);
			{
				if (isWinner) {
					alert(`Vince il giocatore ${dataPlayers.player}`);
					window.location.reload();
				} else {
					dataPlayers.changePlayerCurrent();
				}
			}
		}
	};
	return (
		<>
			<div onClick={addSign}>
				{box === 1 ? <div className="cross">{cross}</div> : ""}
				{box === 2 ? <div className="circle">{circle}</div> : ""}
			</div>
		</>
	);
};

export default Cell;
