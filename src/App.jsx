import Header from "./components/layout/Header";
import Main from "./pages/Main";
import Footer from "./components/layout/Footer";
import "./styles/reset.css";
import "./styles/common.css";
import "./styles/layout.css";

export default function App() {
	return (
		<div id="wrap">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
