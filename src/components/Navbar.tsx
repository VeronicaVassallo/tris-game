type Navprops = {
	title: string;
	prize: number;
};

export const Navbar = (props: Navprops) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<p>
				Per giocare a questo gioco ci vogliono <span>{props.prize}</span>{" "}
				giocatori
			</p>
		</div>
	);
};
