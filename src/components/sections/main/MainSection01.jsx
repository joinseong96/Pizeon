import { useState } from "react";

const sectionItems = [
	{
		num: "1",
		img: "/images/main_sec01_item01_before.png",
		imgAfter: "/images/main_sec01_item01_after.jpg",
		title: "빨래엔~ 피죤",
		sub: ["Make your life Fresh"],
		href: "#",
	},
	{
		num: "2",
		img: "/images/main_sec01_item02_before.png",
		imgAfter: "/images/main_sec01_item02_after.png",
		title: "당신을 위한 완벽한 세탁세제! Act'z",
		sub: ["#강력 세척 #효소 성분 #실내 건조"],
		href: "#",
	},
	{
		num: "3",
		img: "/images/main_sec01_item03_before.png",
		imgAfter: "/images/main_sec01_item03_after.jpg",
		title: "때도 싹! 균도 싹! 무균무때",
		sub: ["락스없이 안전하고 깨끗하게", "유해균 99.9% 제거"],
		href: "#",
	},
];

export default function MainSection01() {
	const [activeItem, setActiveItem] = useState(0);

	return (
		<section className="main_sec01">
			<div className="inner">
				<div className="sec_tit">
					<h2>품질 경쟁력을 위한 노력</h2>
					<p>
						피죤은 고도의 기술력을 가지고 시대 변화에 발맞춰 지속적인 발전을
						이루어 나가고 있습니다.
					</p>
				</div>
				<ul className="sec01_wp">
					{sectionItems.map((item, i) => (
						<li
							key={i}
							className={`sec01_item${activeItem === i ? " active" : ""}`}
							onMouseEnter={() => setActiveItem(i)}
						>
							<div className="cont_img">
								<img src={activeItem === i ? item.imgAfter : item.img} alt="" />
							</div>
							<div className="cont_txt">
								<span>{item.num}</span>
								<div className="hidden_txt">
									<strong>{item.title}</strong>
									{item.sub.map((s, i) => (
										<div key={i} className="sub_tit">
											{s}
											<br />
										</div>
									))}
									<a href={item.href}>View more</a>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
