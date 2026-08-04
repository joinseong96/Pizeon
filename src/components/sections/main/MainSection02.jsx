const sectionItems = [
	{
		sub: "고농축 피죤",
		reverse: false,
		tit: ["증점제 무첨가,", "부담없이 사용하세요."],
		href: "#",
		img: "/images/main_sec02_item01.jpg",
		liCont: "w-[1780px] ml-[125px] max-ta:w-[90%] max-ta:ml-0 max-mo:w-full",
		imgCont: "w-[1227px] h-[780px] max-ta:w-[60%] max-ta:h-auto max-mo:w-full",
	},
	{
		sub: "액츠 실내건조",
		reverse: true,
		tit: ["빨래에 대한 고민은 많아도 ", "해결은 간단!"],
		href: "#",
		img: "/images/main_sec02_item02.jpg",
		liCont: "w-[1264px] ml-[278px] max-ta:w-[90%] max-ta:ml-0 max-mo:w-full",
		imgCont: "w-[672px] h-[850px] max-ta:w-[50%] max-ta:h-auto max-mo:w-full",
	},
	{
		sub: "무균무때",
		reverse: false,
		tit: ["인체에 무해한 성분으로", "찌든때 강력제거!"],
		href: "#",
		img: "/images/main_sec02_item03.jpg",
		liCont: "w-[1500px] ml-[278px] max-ta:w-[90%] max-ta:ml-0 max-mo:w-full",
		imgCont: "w-[948px] h-[650px] max-ta:w-[55%] max-ta:h-auto max-mo:w-full",
	},
];

export default function MainSection02() {
	return (
		<section className="py-[200px]">
			<ul className="flex flex-col gap-[200px]">
				{sectionItems.map((item, i) => (
					<li
						key={i}
						className={`flex items-center justify-between
              max-ta:flex-col max-ta:items-start max-ta:gap-[20px]
              ${item.reverse ? "flex-row-reverse max-ta:flex-col" : ""}
              ${item.liCont}`}
					>
						<div className="text-[#222] font-medium">
							<span className="block mb-[45px] max-mo:mb-[20px] text-[24px] max-mo:text-[18px]">
								{item.sub}
							</span>
							{item.tit.map((t, j) => (
								<div
									key={j}
									className="text-[42px] max-mo:text-[26px] font-semibold"
								>
									{t}
									<br />
								</div>
							))}
							<a
								href={item.href}
								className="inline-block mt-[120px] max-mo:mt-[40px] text-[18px]"
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
