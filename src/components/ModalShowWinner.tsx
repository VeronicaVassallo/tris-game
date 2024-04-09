import { ButtonRedresh } from "./ButtonRefresh";
type propsModalShowWinner = {
	player: number;
};

export const ModalShowWinner = (props: propsModalShowWinner) => {
	return (
		<>
			<div className="containerModal"></div>
			<div className="cardModal">
				<h2 className="titleCardModal">VINCE il giocatore {props.player}!</h2>
				<div className="XWinner">{props.player === 1 ? "X" : "O"}</div>
				<div className="buttonModal">
					<ButtonRedresh />
				</div>
			</div>
		</>
	);
};
