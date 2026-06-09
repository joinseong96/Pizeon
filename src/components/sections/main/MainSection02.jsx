const sectionItems = [
	{
		sub: "고농축 피죤",
		reverse: false,
		tit: ["증점제 무첨가,", "부담없이 사용하세요."],
		href: "#",
		img: "/images/main_sec02_item01.jpg",
	},
	{
		sub: "액츠 실내건조",
		reverse: true,
		tit: ["빨래에 대한 고민은 많아도 ", "해결은 간단!"],
		href: "#",
		img: "/images/main_sec02_item02.jpg",
	},
	{
		sub: "무균무때",
		reverse: false,
		tit: ["인체에 무해한 성분으로", "찌든때 강력제거!"],
		href: "#",
		img: "/images/main_sec02_item03.jpg",
	},
];

export default function MainSection02() {
	return (
		<section className="main_sec02">
			<ul className="item_wp">
				{sectionItems.map((item, i) => (
					<li key={i} className={item.reverse ? "reverse" : ""}>
						<div className="cont_txt">
							<span>{item.sub}</span>
							{item.tit.map((t, i) => (
								<div key={i} className="cont_tit">
									{t}
									<br />
								</div>
							))}
							<a href={item.href}>view more</a>
						</div>
						<div className="cont_img">
							<img src={item.img} alt="" />
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
