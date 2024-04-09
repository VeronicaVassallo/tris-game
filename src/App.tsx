import "./App.css";
import { Navbar } from "./components/Navbar";
import { GridTris } from "./components/GridTris";

import { PlayerContextProvaider } from "./contexts/PlayerContext";

function App() {
	return (
		<div className="App">
			<PlayerContextProvaider>
				<Navbar title="Benvenuti al gioco del TRIS" />
				<GridTris />
			</PlayerContextProvaider>
		</div>
	);
}

export default App;
