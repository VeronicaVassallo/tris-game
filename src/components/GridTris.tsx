import "../gridTris.css";
import Cell from "./Cell";

/*8) importo useContext --> metodo che mi permette di usare il dato dentro il context.
PlayerContext --> la constante che gli avevo dato come valore inziale il player*/
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

/*TO DO:
A) gestione turno gioco, metti il player nel contest cosi che possa essere modificato in qualsia celletta FATTO
B) nel componente Cell aggiungi alla fuzione addSign la possibilita di modificare il player ad ogni turno, 
cosi da creare una turnazione automatica.FATTO
C) se la casella è occupata non ti permette di selezionarla Fatto
D)controlli per vedere chi vince CAPIRE DOVE E' L'ERRORE
E)Tasto di refresh pagina FATTO
 */

export const GridTris: React.FC = () => {
	const {
		current,

		valueCell1,
		valueCell2,
		valueCell3,
		valueCell4,
		valueCell5,
		valueCell6,
		valueCell7,
		valueCell8,
		valueCell9,
	} = useContext(PlayerContext);
	const [isWinner, setIsWinner] = useState(-1);

	let checkWinner = () => {
		debugger;
		if (
			(valueCell1 === 1 && valueCell2 === 1 && valueCell3 === 1) ||
			(valueCell4 === 1 && valueCell5 === 1 && valueCell6 === 1) ||
			(valueCell7 === 1 && valueCell8 === 1 && valueCell9 === 1) ||
			(valueCell1 === 1 && valueCell5 === 1 && valueCell9 === 1) ||
			(valueCell3 === 1 && valueCell5 === 1 && valueCell7 === 1) ||
			(valueCell1 === 1 && valueCell4 === 1 && valueCell7 === 1) ||
			(valueCell2 === 1 && valueCell5 === 1 && valueCell8 === 1) ||
			(valueCell3 === 1 && valueCell6 === 1 && valueCell9 === 1)
		) {
			setIsWinner(1);
		} else if (
			(valueCell1 === 2 && valueCell2 === 2 && valueCell3 === 2) ||
			(valueCell4 === 2 && valueCell5 === 2 && valueCell6 === 2) ||
			(valueCell7 === 2 && valueCell8 === 2 && valueCell9 === 2) ||
			(valueCell1 === 2 && valueCell5 === 2 && valueCell9 === 2) ||
			(valueCell3 === 2 && valueCell5 === 2 && valueCell7 === 2) ||
			(valueCell1 === 2 && valueCell4 === 2 && valueCell7 === 2) ||
			(valueCell2 === 2 && valueCell5 === 2 && valueCell8 === 2) ||
			(valueCell3 === 2 && valueCell6 === 2 && valueCell9 === 2)
		) {
			setIsWinner(2);
		}
	};

	useEffect(() => {
		checkWinner();
	}, [
		current,
		valueCell1,
		valueCell2,
		valueCell3,
		valueCell4,
		valueCell5,
		valueCell6,
		valueCell7,
		valueCell8,
		valueCell9,
	]);

	return (
		<>
			<div className="background">
				{isWinner !== -1 && isWinner === 1 && (
					<p className="playerCurrent">VINCE 1</p>
				)}
				{isWinner !== -1 && isWinner === 2 && (
					<p className="playerCurrent">VINCE 2</p>
				)}

				<div>
					<div className="rowGrid">
						<Cell positionCell={1} />
						<Cell positionCell={2} />
						<Cell positionCell={3} />
					</div>
					<div className="rowGrid">
						<Cell positionCell={4} />
						<Cell positionCell={5} />
						<Cell positionCell={6} />
					</div>
					<div className="rowGrid">
						<Cell positionCell={7} />
						<Cell positionCell={8} />
						<Cell positionCell={9} />
					</div>
				</div>
			</div>
		</>
	);
};
