import React, { useState } from "react";
import "../gridTris.css";

//Context
import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

type PropsCell = {
	positionCell: number;
};

const Cell = (props: PropsCell) => {
	let dataPlayers = useContext(PlayerContext);
	const cross: string = "X";
	const circle: string = "O";

	const [box1, setbox1] = useState(0);

	const addSign = (): void => {
		if (dataPlayers.player === 1) {
			setbox1(1);
		} else if (dataPlayers.player === 2) {
			setbox1(2);
		}

		dataPlayers.setPosition(props.positionCell, dataPlayers.player);
		let isWinner = dataPlayers.checkWinner(dataPlayers.player);
		{
			isWinner
				? alert(`Vince il giocatore ${dataPlayers.player}`)
				: dataPlayers.changePlayerCurrent();
		}
	};
	return (
		<>
			<div onClick={addSign}>
				{box1 === 1 ? <div className="cross">{cross}</div> : ""}
				{box1 === 2 ? <div className="circle">{circle}</div> : ""}
			</div>
		</>
	);
};

export default Cell;
