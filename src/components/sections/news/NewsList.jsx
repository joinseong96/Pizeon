import { newsListItmes, itemsPages } from "./NewsData";

export default function NewsList({ currentPage }) {
	const startIndex = (currentPage - 1) * itemsPages;
	const endIndex = startIndex + itemsPages;
	const currentItems = newsListItmes.slice(startIndex, endIndex);
	return (
		<div className="w-[1636px] mx-auto mb-[100px]">
			<ul className="flex flex-wrap gap-[80px_20px]">
				{currentItems.map((item, i) => (
					<li key={i}>
						<div className="mb-[25px]">
							<img src={item.img} alt={item.alt} />
						</div>
						<div>
							<div className="flex gap-[10px] mb-[10px]">
								{item.tag.map((t) => (
									<span
										key={t.tagName}
										className="font-semibold text-[18px] text-[#002F87]"
									>
										{t.tagName}
									</span>
								))}
							</div>
							<p className="mb-[35px] text-[24px] font-semibold font-[#222]">
								{item.title}
							</p>
							<small className="text-[#777] text-[16px]">{item.date}</small>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
