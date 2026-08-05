import { Routes, Route } from "react-router-dom";
import ScrollTop from "./components/common/ScrollTop";
import Header from "./components/layout/Header";
import Main from "./pages/Main";
import Footer from "./components/layout/Footer";
import About from "./pages/about/About";
import Brand from "./pages/brand/Brand";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";

export default function App() {
	return (
		<div id="wrap">
			<ScrollTop />
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about/About" element={<About />} />
				<Route path="/brand/Brand" element={<Brand />} />
				<Route path="/news/News" element={<News />} />
				<Route path="/contact/Contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}
