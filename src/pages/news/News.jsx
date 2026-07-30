import ListTopBar from "../../components/common/ListTopBar";
import PageTitle from "../../components/common/PageTitle";
// import pagination from "../../components/common/pagination";
import NewsList from "../../components/sections/news/NewsList";

export default function News() {
	return (
		<div className="pt-[150px]">
			<PageTitle title="피죤 소식" />
			<ListTopBar />
			<NewsList />
		</div>
	);
}
