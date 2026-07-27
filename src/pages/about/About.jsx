import PageTitle from "../../components/common/PageTitle";
import AboutBanner from "../../components/sections/about/AboutBanner";
import AboutPhilosophy from "../../components/sections/about/AboutPhilosophy";
import AboutCI from "../../components/sections/about/AboutCi";

export default function About() {
	return (
		<div className="pt-[150px]">
			<PageTitle title="피죤 소개" />
			<AboutBanner />
			<AboutPhilosophy />
			<AboutCI />
		</div>
	);
}
