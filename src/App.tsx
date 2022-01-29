import NavBar from "./components/NavBar"

import RoutesPages from "./routes";

import { GlobalStyles } from "./styles/global";
import { ToastContainer } from 'react-toastify'

function App() {

	return (
		<>
			<GlobalStyles />
			<NavBar />
			<RoutesPages />
			<ToastContainer autoClose={3000} />
		</>
	);
}

export default App;
