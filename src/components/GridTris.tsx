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
C) se la casella è occupata non ti permette di selezionarla
D)controlli per vedere chi vince
E)Tasto di refresh pagina
 */

export const GridTris: React.FC = () => {
	const dataPlayers = useContext(PlayerContext); //8) facendo cosi il dato del contest lo inserisco dentro questa constante

	return (
		<>
			<div className="background">
				{
					/*TO DO: sistema questo terniaro, il player corrente non viene aggiornato */
					dataPlayers.player === 2 ? (
						<h2>Tocca al giocatore 2 Cerchio</h2>
					) : (
						<h2>Tocca al giocatore 1 Croce</h2>
					)
				}

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
