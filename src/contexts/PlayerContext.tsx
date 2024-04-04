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

import React, { createContext } from "react"; //2
import { dataPlayers } from "./player"; //3

type PlayerContextProviderProps = {
	children: React.ReactNode;
}; //4)

export const PlayerContext = createContext(dataPlayers); //5)

export const PlayerContextProvaider = ({
	children,
}: PlayerContextProviderProps) => {
	return (
		<PlayerContext.Provider value={dataPlayers}>
			{children}
		</PlayerContext.Provider>
	);
}; //6)
