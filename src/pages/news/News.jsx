import { useState, useEffect } from "react";
import ListTopBar from "../../components/common/ListTopBar";
import PageTitle from "../../components/common/PageTitle";
import Pagination from "../../components/common/pagination";
import NewsList from "../../components/sections/news/NewsList";
import {
	newsListItmes,
	itemsPages,
} from "../../components/sections/news/NewsData";

export default function News() {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(newsListItmes.length / itemsPages);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [currentPage]);

	return (
		<div className="pt-[clamp(75px,calc(100vw*(150/1700)),150px)] pb-[clamp(75px,calc(100vw*(150/1700)),150px)]">
			<PageTitle title="피죤 소식" />
			<ListTopBar
				currentPage={currentPage}
				totalPages={totalPages}
				totalCount={newsListItmes.length}
			/>
			<NewsList currentPage={currentPage} />
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={setCurrentPage}
			/>
		</div>
	);
}
