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
}

type PlayerContextProviderProps = {
	children: React.ReactNode;
};

export const PlayerContext = createContext<MyContext>({
	current: 0,
	setCurrent: () => {},
	changePlayerCurrent: () => {},
	setPosition: (cellaCorrente: number, playerCorrente: number) => {},
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
};
