import PageTitle from "../../components/common/PageTitle";
import BrandCard from "../../components/sections/brand/BrandCard";

export default function Brand() {
	return (
		<div className="pt-[clamp(75px,calc(100vw*(150/1700)),150px)] pb-[clamp(75px,calc(100vw*(150/1700)),150px)]">
			<PageTitle title="브랜드" />
			<BrandCard />
		</div>
	);
}
