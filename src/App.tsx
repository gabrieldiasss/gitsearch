import NavBar from "./components/NavBar"

import RoutesPages from "./routes";

import { GlobalStyles } from "./styles/global";
import { ToastContainer } from 'react-toastify'
import UserGithubProvider from "./hooks/useGitUser";

function App() {

	return (
		<UserGithubProvider>
			<GlobalStyles />
			<NavBar />
			<RoutesPages />
			<ToastContainer autoClose={3000} />
		</UserGithubProvider>
	);
}

export default App;
