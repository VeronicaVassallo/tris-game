export const ButtonRedresh = () => {
	const refreshPage = () => {
		window.location.reload();
	};
	return (
		<div onClick={refreshPage} className="buttonRefresh">
			<div>Nuova Partita</div>
		</div>
	);
};
