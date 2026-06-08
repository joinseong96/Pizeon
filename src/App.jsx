import Header from "./components/layout/Header";
import "./styles/reset.css";
import "./styles/common.css";
import "./styles/layout.css";
import Main from "./pages/Main";

export default function App() {
	return (
		<div id="wrap">
			<Header />
			<Main />
		</div>
	);
}
