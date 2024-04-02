export const dataPlayers = {
	player: 1,
	valueCell1: 0,
	valueCell2: 0,
	valueCell3: 0,
	valueCell4: 0,
	valueCell5: 0,
	valueCell6: 0,
	valueCell7: 0,
	valueCell8: 0,
	valueCell9: 0,
	//metodo che mi permette di aggiornare il player corrente
	changePlayerCurrent(): void {
		if (this.player === 1) {
			this.player = 2;
		} else {
			this.player = 1;
		}
	},

	//metodo che mi setta il valore della posizione della cella
	//Per ciascuna cella tris gli do il valore del player corrente (1 o 2)
	setPosition(cellaCorrente: number, playerCorrente: number) {
		if (cellaCorrente === 1) {
			this.valueCell1 = playerCorrente;
		}
		switch (cellaCorrente) {
			case 1:
				this.valueCell1 = playerCorrente;
				break;
			case 2:
				this.valueCell2 = playerCorrente;
				break;
			case 3:
				this.valueCell3 = playerCorrente;
				break;
			case 4:
				this.valueCell4 = playerCorrente;
				break;
			case 5:
				this.valueCell5 = playerCorrente;
				break;
			case 6:
				this.valueCell6 = playerCorrente;
				break;
			case 7:
				this.valueCell7 = playerCorrente;
				break;
			case 8:
				this.valueCell8 = playerCorrente;
				break;
			case 9:
				this.valueCell9 = playerCorrente;
				break;
			default:
				console.log(`Valore cella corrente non accetato ${cellaCorrente}`);
				break;
		}
	},

	//check vincitore passo come parametro il playerCorrente
	//confrontanto tra loro i vari valori della cella controllo chi ha vinto
	checkWinner(playerCurrent: number): boolean {
		let isWinner = false;
		if (
			this.valueCell1 === playerCurrent &&
			this.valueCell2 === playerCurrent &&
			this.valueCell3 === playerCurrent
		) {
			isWinner = true;
		}
		if (
			this.valueCell4 === playerCurrent &&
			this.valueCell5 === playerCurrent &&
			this.valueCell6 === playerCurrent
		) {
			isWinner = true;
		}

		if (
			this.valueCell7 === playerCurrent &&
			this.valueCell8 === playerCurrent &&
			this.valueCell9 === playerCurrent
		) {
			isWinner = true;
		}

		return isWinner;
	},
};
