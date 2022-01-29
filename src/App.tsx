import NavBar from "./components/NavBar"

import RoutesPages from "./routes";

import { GlobalStyles } from "./styles/global";

function App() {

	return (
		<>
			<GlobalStyles />
			<NavBar />
			<RoutesPages />
		</>
	);
}

export default App;
