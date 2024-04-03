import "./App.css";
import { Navbar } from "./components/Navbar";
import { GridTris } from "./components/GridTris";

import { PlayerContextProvaider } from "./contexts/PlayerContext"; //7)
//7) utilizzo come Provider (riga 11 a 14) tutti i componenti al suo interno potranno accedere ai suoi dati.

function App() {
	return (
		<div className="App">
			<PlayerContextProvaider>
				<Navbar title="Benvenuti al gioco del Tris" />
				<GridTris />
			</PlayerContextProvaider>
		</div>
	);
}

export default App;
