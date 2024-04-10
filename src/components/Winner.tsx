type propsSignWinner = {
	signWinner: string;
	signLoser: string;
};

export const Winner = (props: propsSignWinner) => {
	return (
		<div className="containerWinner">
			<div className="podium1">
				<div className="sign first">{props.signWinner}</div>
				<div className="containerPodium1">1</div>
			</div>
			<div className="podium2">
				<div className="sign second">{props.signLoser}</div>
				<div className="containerPodium2">2</div>
			</div>
		</div>
	);
};
