import { useState } from "react";

const titItems = ["Natural", "Safe", "Quality"];

const sectionItems = [
	{
		sub: "자연중심",
		txt: "피죤은 자연을 섬깁니다. 자연으로 돌아갈 제품은 자연과 가까워야 한다는 신념으로 원료부터 패키지까지 친환경 제품을 고집합니다.",
		txtWidth:
			"w-[450px] max-ta:w-[calc(100vw*(450/1700))] max-mo:w-[calc(100vw*(130/360))]",
		href: "#",
		bg: "/images/main_sec03_item01.png",
	},
	{
		sub: "NO 미세플라스틱",
		txt: "피부에 닿는 섬유유연제이기에, 쉽게 자극받는 민감한 피부도 성분 걱정없이 안심하고 사용하세요.",
		txtWidth:
			"w-[425px] max-ta:w-[calc(100vw*(450/1700))] max-mo:w-[calc(100vw*(130/360))]",
		href: "#",
		bg: "/images/main_sec03_item02.png",
	},
	{
		sub: "품질 최우선",
		txt: "좋은 상품은 갑자기 탄생하는 것이 아니라 꾸준한 개발과 노력을 통해 만들어내는 것이라고 믿습니다. '신뢰'를 동반한 제품으로 고객 만족을 이어가겠습니다.",
		txtWidth:
			"w-[535px] max-ta:w-[calc(100vw*(450/1700))] max-mo:w-[calc(100vw*(130/360))]",
		href: "#",
		bg: "/images/main_sec03_item03.png",
	},
];

export default function MainSection03() {
	const [activeItem, setActiveItem] = useState(0);

	return (
		<div
			className="flex w-full h-[528px] max-ta:h-[calc(100vw*(528/1700))] max-mo:h-[calc(100vw*(200/360))] bg-cover"
			style={{ backgroundImage: `url(${sectionItems[activeItem].bg})` }}
		>
			<ul className="w-1/2 flex flex-col justify-center items-center">
				{titItems.map((t, i) => (
					<li
						key={i}
						className={`cursor-pointer transition-all duration-300 ${
							activeItem === i
								? "text-[72px] text-white max-ta:text-[calc(100vw*(72/1700))] max-mo:text-[calc(100vw*(24/360))]"
								: "text-[38px] font-medium text-white/60 max-ta:text-[calc(100vw*(38/1700))] max-mo:text-[calc(100vw*(14/360))]"
						}`}
						onClick={() => setActiveItem(i)}
					>
						{t}
					</li>
				))}
			</ul>

			<div className="relative w-1/2 flex flex-col justify-center items-center text-white z-[1]">
				<div className="absolute inset-0 -z-[1] bg-black/40" />

				<div className="mb-[24px] text-[28px] font-medium max-ta:mb-[calc(100vw*(24/1700))] max-ta:text-[calc(100vw*(28/1700))] max-mo:mb-[calc(100vw*(12/360))] max-mo:text-[calc(100vw*(15/360))]">
					{sectionItems[activeItem].sub}
				</div>
				<p
					className={`mb-[64px] text-[20px] font-normal text-center max-ta:mb-[calc(100vw*(64/1700))] max-ta:text-[calc(100vw*(20/1700))] max-mo:mb-[calc(100vw*(14/360))] max-mo:text-[calc(100vw*(8/360))] ${sectionItems[activeItem].txtWidth}`}
				>
					{sectionItems[activeItem].txt}
				</p>
				<a
					href={sectionItems[activeItem].href}
					className="text-[20px] font-medium max-ta:text-[calc(100vw*(20/1700))] max-mo:text-[calc(100vw*(10/360))]"
				>
					view more
				</a>
			</div>
		</div>
	);
}
