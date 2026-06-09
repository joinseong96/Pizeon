import { useState } from "react";

const titItems = ["Natural", "Safe", "Quality"];

const sectionItems = [
	{
		tit: ["Natural", "Safe", "Quality"],
		sub: "자연중심",
		txt: "피죤은 자연을 섬깁니다. 자연으로 돌아갈 제품은 자연과 가까워야 한다는 신념으로 원료부터 패키지까지 친환경 제품을 고집합니다.",
		txtClass: "txt_01",
		href: "#",
		bg: "/images/main_sec03_item01.png",
	},
	{
		tit: ["Natural", "Safe", "Quality"],
		sub: "NO 미세플라스틱 NO 방부제 NO 색소",
		txt: "피부에 닿는 섬유유연제이기에, 쉽게 자극받는 민감한 피부도 성분 걱정없이 안심하고 사용하세요.",
		txtClass: "txt_02",
		href: "#",
		bg: "/images/main_sec03_item02.png",
	},
	{
		tit: ["Natural", "Safe", "Quality"],
		sub: "품질 최우선",
		txt: "좋은 상품은 갑자기 탄생하는 것이 아니라 꾸준한 개발과 노력을 통해 만들어내는 것이라고 믿습니다. ‘신뢰’를 동반한 제품으로 고객 만족을 이어가겠습니다.",
		txtClass: "txt_03",
		href: "#",
		bg: "/images/main_sec03_item03.png",
	},
];

export default function MainSection03() {
	const [activeItem, setActiveItem] = useState(0);

	return (
		<div
			className="main_sec03"
			style={{ backgroundImage: `url(${sectionItems[activeItem].bg})` }}
		>
			<ul className="tit_wp">
				{titItems.map((t, i) => (
					<li
						key={i}
						className={activeItem === i ? "active" : ""}
						onClick={() => setActiveItem(i)}
					>
						{t}
					</li>
				))}
			</ul>

			<div className="cont_txt">
				<div className="cont_sub_tit">{sectionItems[activeItem].sub}</div>
				<p className={sectionItems[activeItem].txtClass}>
					{sectionItems[activeItem].txt}
				</p>
				<a href={sectionItems[activeItem].href}>view more</a>
			</div>
		</div>
	);
}
