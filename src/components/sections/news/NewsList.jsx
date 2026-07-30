const newsListItmes = [
	{
		img: "../images/news/news_img01.jpg",
		tag: [{ tagName: "#피죤" }, { tagName: "#박서준" }, { tagName: "#PIGEON" }],
		title: "[피죤X박서준] 상쾌함과 상쾌함이 만나다",
		alt: "[피죤X박서준] 상쾌함과 상쾌함이 만나다",
		date: "2022. 02. 14",
	},
	{
		img: "../images/news/news_img02.jpg",
		tag: [{ tagName: "#피죤" }, { tagName: "#무균무때" }, { tagName: "#광희" }],
		title: "무균무때-광희 [인터뷰편]",
		alt: "무균무때-광희 [인터뷰편]",
		date: "2022. 02. 10",
	},
	{
		img: "../images/news/news_img03.jpg",
		tag: [{ tagName: "#피죤" }, { tagName: "#무균무때" }, { tagName: "#광희" }],
		title: "무균무때-광희 [드릴펑]",
		alt: "무균무때-광희 [드릴펑]",
		date: "2022. 02. 04",
	},
	{
		img: "../images/news/news_img04.jpg",
		tag: [{ tagName: "#피죤" }, { tagName: "#무균무때" }, { tagName: "#광희" }],
		title: "무균무때-광희 [살균스프레이]",
		alt: "무균무때-광희 [살균스프레이]",
		date: "2022. 02. 01",
	},
];

export default function NewsList() {
	return (
		<div className="w-[1636px] mx-auto">
			<ul className="flex flex-wrap gap-[80px_20px]">
				{newsListItmes.map((item, i) => (
					<li key={i}>
						<div>
							<img src={item.img} alt={item.alt} />
						</div>
						<div>
							<div>
								{item.tag.map((t) => (
									<span key={t}>{t.tagName}</span>
								))}
							</div>
							<p>{item.title}</p>
							<small>{item.date}</small>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
