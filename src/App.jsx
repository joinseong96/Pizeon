import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Main from "./pages/Main";
import Footer from "./components/layout/Footer";
import Company from "./pages/about/Company";
import History from "./pages/about/History";
import Ceo from "./pages/about/Ceo";
import Location from "./pages/about/Location";
import "./styles/reset.css";
import "./styles/common.css";
import "./styles/layout.css";

export default function App() {
	return (
		<div id="wrap">
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about/company" element={<Company />} />
				<Route path="/about/history" element={<History />} />
				<Route path="/about/ceo" element={<Ceo />} />
				<Route path="/about/location" element={<Location />} />
			</Routes>
			<Footer />
		</div>
	);
}
