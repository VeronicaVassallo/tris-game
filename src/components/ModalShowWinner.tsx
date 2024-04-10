import { ButtonRedresh } from "./ButtonRefresh";
import { Winner } from "./Winner";
type propsModalShowWinner = {
	player: number;
};

export const ModalShowWinner = (props: propsModalShowWinner) => {
	return (
		<>
			<div className="containerModal"></div>
			<div className="cardModal">
				<h2 className="titleCardModal">YOU WIN: Giocatore {props.player}!</h2>
				<div>
					{props.player === 1 ? (
						<Winner signWinner="X" signLoser="O" />
					) : (
						<Winner signWinner="O" signLoser="X" />
					)}
				</div>
				<div className="buttonModal">
					<ButtonRedresh />
				</div>
			</div>
		</>
	);
};
