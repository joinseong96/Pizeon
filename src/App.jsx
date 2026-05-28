import Header from "./components/layout/Header";
import "./styles/reset.css";
import "./styles/common.css";
import "./styles/layout.css";
import MainBanner from "./components/sections/main/MainBanner";

export default function App() {
	return (
		<div id="wrap">
			<Header />
			<MainBanner />
		</div>
	);
}
