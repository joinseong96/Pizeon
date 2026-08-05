const sectionItems = [
	{
		sub: "고농축 피죤",
		reverse: false,
		tit: ["증점제 무첨가,", "부담없이 사용하세요."],
		href: "#",
		img: "/images/main_sec02_item01.jpg",
		liCont: "w-[1780px] ml-auto max-ta:w-[calc(100vw*(1580/1700))]",
		imgCont:
			"w-[1227px] h-[780px] max-ta:w-[calc(100vw*(1120/1700))] max-ta:h-auto",
	},
	{
		sub: "액츠 실내건조",
		reverse: true,
		tit: ["빨래에 대한 고민은 많아도 ", "해결은 간단!"],
		href: "#",
		img: "/images/main_sec02_item02.jpg",
		liCont: "w-[1264px] mx-auto max-ta:w-[calc(100vw*(1264/1700))]",
		imgCont:
			"w-[672px] h-[850px] max-ta:w-[calc(100vw*(672/1700))] max-ta:h-auto",
	},
	{
		sub: "무균무때",
		reverse: false,
		tit: ["인체에 무해한 성분으로", "찌든때 강력제거!"],
		href: "#",
		img: "/images/main_sec02_item03.jpg",
		liCont: "w-[1500px] ml-auto max-ta:w-[calc(100vw*(1500/1700))]",
		imgCont:
			"w-[948px] h-[650px] max-ta:w-[calc(100vw*(948/1700))] max-ta:h-auto",
	},
];

export default function MainSection02() {
	return (
		<section className="py-[200px] max-ta:py-[calc(100vw*(200/1700))]">
			<ul className="flex flex-col gap-[200px] max-ta:gap-[calc(100vw*(200/1700))]">
				{sectionItems.map((item, i) => (
					<li
						key={i}
						className={`flex items-center justify-between
              max-ta:items-start max-ta:gap-[calc(100vw*(20/1700))]
              ${item.reverse ? "flex-row-reverse" : ""}
              ${item.liCont}`}
					>
						<div className="text-[#222] font-medium">
							<span className="block mb-[45px] text-[24px] max-ta:mb-[calc(100vw*(45/1700))] max-ta:text-[calc(100vw*(24/1700))]">
								{item.sub}
							</span>
							{item.tit.map((t, j) => (
								<div
									key={j}
									className="text-[42px] font-semibold max-ta:text-[calc(100vw*(42/1700))]"
								>
									{t}
									<br />
								</div>
							))}
							<a
								href={item.href}
								className="inline-block mt-[120px] text-[18px] max-ta:mt-[calc(100vw*(120/1700))] max-ta:text-[calc(100vw*(18/1700))]"
							>
								view more
							</a>
						</div>

						<div className={item.imgCont}>
							<img
								src={item.img}
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
