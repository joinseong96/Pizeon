import { newsListItmes, itemsPages } from "./NewsData";

export default function NewsList({ currentPage }) {
	const startIndex = (currentPage - 1) * itemsPages;
	const endIndex = startIndex + itemsPages;
	const currentItems = newsListItmes.slice(startIndex, endIndex);
	return (
		<div className="w-[1636px] mx-auto mb-[clamp(50px,calc(100vw*(100/1700)),100px)] max-ta:w-[calc(100vw*(1636/1700))] max-mo:w-[calc(100vw*(320/360))]">
			<ul className="flex flex-wrap gap-y-[clamp(30px,calc(100vw*(80/1700)),80px)] gap-x-[clamp(10px,calc(100vw*(20/1700)),20px)]">
				{currentItems.map((item, i) => (
					<li
						key={i}
						className="w-[clamp(360px,calc(100vw*(808/1700)),808px)] max-mo:w-[100%]"
					>
						<div className="mb-[clamp(12px,calc(100vw*(25/1700)),25px)]">
							<img src={item.img} alt={item.alt} />
						</div>
						<div>
							<div className="flex gap-[clamp(5px,calc(100vw*(10/1700)),10px)] mb-[clamp(5px,calc(100vw*(10/1700)),10px)]">
								{item.tag.map((t) => (
									<span
										key={t.tagName}
										className="font-semibold text-[clamp(10px,calc(100vw*(18/1700)),18px)] text-[#002F87]"
									>
										{t.tagName}
									</span>
								))}
							</div>
							<p className="mb-[clamp(10px,calc(100vw*(35/1700)),35px)] text-[clamp(12px,calc(100vw*(24/1700)),24px)] font-semibold text-[#222]">
								{item.title}
							</p>
							<small className="text-[#777] text-[clamp(12px,calc(100vw*(16/1700)),16px)]">
								{item.date}
							</small>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
