/*Come si crea un context con react - Typiscript?
1) Crea una cartella che conterra tutti i tuoi contexts, dentro questa cartella creo:
-un file che conterra i dato che voglio condividere con tutta la mia applicazione (in questo caso il dato iniziale 
    del player che sta giocando, ossia il file player.ts) 
-un'altro file PlayerContext.tsx che conterra il nostro context vero e proprio.

2)importo createContext che è uno strumento contenuto di base da react che ci permette di creare il nostro
context.
3) importo il dato che voglio condividere, ossia il player
4) Definisco il tipo della props-children , che in questo caso accettera sara di tipo
React.ReactNode , ovvero "componente"
5) Creo una costante che inizializzo con il metodo createContext() --> alla quale gli 
assegno come valore iniziale, il dato che appunto voglio condividere, player
6) Creo il Provaider , ossia il contenitore che fornira tutti i dati che voglio condividere con il
resto dell' applicazione, mi bastera inserirli al suo interno come props-children(guarda il file App.tsx 7))
7)guarda il file App.tsx
8) Vado ad predermi e utilizzare il dato condiviso esempio: guarda il file GridTris.tsx*/

//

import React, { createContext, useState, Dispatch, useEffect } from "react"; //2

interface MyContext {
	current: number;
	setCurrent: Dispatch<React.SetStateAction<number>>;
	changePlayerCurrent: () => void;
	setPosition: (cellaCorrente: number, playerCorrente: number) => void;
	valueCell1: number;
	valueCell2: number;
	valueCell3: number;
	valueCell4: number;
	valueCell5: number;
	valueCell6: number;
	valueCell7: number;
	valueCell8: number;
	valueCell9: number;
	//checkWinner: (playerCurrent: number) => boolean;
}

type PlayerContextProviderProps = {
	children: React.ReactNode;
}; //4)

export const PlayerContext = createContext<MyContext>({
	current: 0,
	setCurrent: () => {},
	changePlayerCurrent: () => {},
	setPosition: (cellaCorrente: number, playerCorrente: number) => {},
	//checkWinner: (playerCurrent: number) => false,
	valueCell1: 0,
	valueCell2: 0,
	valueCell3: 0,
	valueCell4: 0,
	valueCell5: 0,
	valueCell6: 0,
	valueCell7: 0,
	valueCell8: 0,
	valueCell9: 0,
}); //5)

export const PlayerContextProvaider = ({
	children,
}: PlayerContextProviderProps) => {
	const [current, setCurrent] = useState(1);

	//
	const [valueCell1, setValueCell1] = useState(0);
	const [valueCell2, setValueCell2] = useState(0);
	const [valueCell3, setValueCell3] = useState(0);
	const [valueCell4, setValueCell4] = useState(0);
	const [valueCell5, setValueCell5] = useState(0);
	const [valueCell6, setValueCell6] = useState(0);
	const [valueCell7, setValueCell7] = useState(0);
	const [valueCell8, setValueCell8] = useState(0);
	const [valueCell9, setValueCell9] = useState(0);

	//metodo che mi permette di aggiornare il player corrente
	const changePlayerCurrent = (): void => {
		if (current === 1) {
			setCurrent(2);
		} else {
			setCurrent(1);
		}
	};

	//metodo che mi setta il valore della posizione della cella
	//Per ciascuna cella tris gli do il valore del player corrente (1 o 2)
	const setPosition = (cellaCorrente: number, playerCorrente: number) => {
		switch (cellaCorrente) {
			case 1:
				setValueCell1(current);
				break;
			case 2:
				setValueCell2(current);
				break;
			case 3:
				setValueCell3(current);
				break;
			case 4:
				setValueCell4(current);
				break;
			case 5:
				setValueCell5(current);
				break;
			case 6:
				setValueCell6(current);
				break;
			case 7:
				setValueCell7(current);
				break;
			case 8:
				setValueCell8(current);
				break;
			case 9:
				setValueCell9(current);
				break;
			default:
				console.log(`Valore cella corrente non accetato ${cellaCorrente}`);
				break;
		}
	};

	//check vincitore passo come parametro il playerCorrente
	//confrontanto tra loro i vari valori della cella controllo chi ha vinto
	/*const checkWinner = (playerCurrent: number): boolean => {
		let isWinner = false;
		if (
			valueCell1 === current &&
			valueCell2 === current &&
			valueCell3 === current
		) {
			isWinner = true;
		}
		if (
			valueCell4 === current &&
			valueCell5 === current &&
			valueCell6 === current
		) {
			isWinner = true;
		}

		if (
			valueCell7 === current &&
			valueCell8 === current &&
			valueCell9 === current
		) {
			isWinner = true;
		}
		if (
			valueCell1 === current &&
			valueCell4 === current &&
			valueCell7 === current
		) {
			isWinner = true;
		}
		if (
			valueCell2 === current &&
			valueCell5 === current &&
			valueCell8 === current
		) {
			isWinner = true;
		}
		if (
			valueCell3 === current &&
			valueCell6 === current &&
			valueCell9 === current
		) {
			isWinner = true;
		}
		if (
			valueCell1 === current &&
			valueCell5 === current &&
			valueCell9 === current
		) {
			isWinner = true;
		}
		if (
			valueCell3 === current &&
			valueCell5 === current &&
			valueCell7 === current
		) {
			isWinner = true;
		}

		return isWinner;
	};
	*/

	return (
		<PlayerContext.Provider
			value={{
				current,
				setCurrent,
				changePlayerCurrent,
				setPosition,
				valueCell1,
				valueCell2,
				valueCell3,
				valueCell4,
				valueCell5,
				valueCell6,
				valueCell7,
				valueCell8,
				valueCell9,
			}}
		>
			{children}
		</PlayerContext.Provider>
	);
}; //6)
