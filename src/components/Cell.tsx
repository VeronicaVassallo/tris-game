import { useEffect, useState } from "react";
import "../gridTris.css";

//Context
import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

type PropsCell = {
	positionCell: number;
};

const Cell = (props: PropsCell) => {
	const { current, setCurrent, changePlayerCurrent, setPosition } =
		useContext(PlayerContext);
	const cross: string = "X";
	const circle: string = "O";

	const [box, setbox] = useState(0);

	const addSign = (): void => {
		/*Il primo controllo vede se la cella gli è stata gia attribuita un valore, se il
		valore è ancora 0 puo assegnargli la x(1) o il O(2), se box risulta avere un valore diverso da zero
		non deve fare nulla, non ti da la possibilita di cliccare*/
		/*TO DO: Controllare perche isWinner scatta prima che setPosition abbia finito di settare la
		posizione del vincitore */
		if (box === 0) {
			if (current === 1) {
				setbox(1);
				changePlayerCurrent();
			} else if (current === 2) {
				setbox(2);
				changePlayerCurrent();
			}

			setPosition(props.positionCell, current);
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
