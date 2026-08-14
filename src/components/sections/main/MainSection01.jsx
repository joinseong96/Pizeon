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
		<section className="pt-[205px] pb-[205px] bg-[#fbfaf9] max-ta:pt-[calc(100vw*(205/1700))] max-ta:pb-[calc(100vw*(205/1700))]">
			<div className="w-[1636px] mx-auto max-ta:w-[calc(100vw*(1500/1700))]">
				<div className="mb-[80px] align-middle max-ta:mb-[calc(100vw*(80/1700))]">
					<h2 className="mb-[24px] text-[42px] font-semibold text-[#111] max-ta:mb-[calc(100vw*(24/1700))] max-ta:text-[calc(100vw*(42/1700))] max-mo:text-[calc(100vw*(16/360))]">
						품질 경쟁력을 위한 노력
					</h2>
					<p className="text-[22px] text-[#222] max-ta:text-[calc(100vw*(22/1700))] max-mo:text-[calc(100vw*(10/360))]">
						피죤은 고도의 기술력을 가지고 시대 변화에 발맞춰
						<br className="hidden max-mo:block" /> 지속적인 발전을 이루어 나가고
						있습니다.
					</p>
				</div>

				<ul className="flex gap-[20px] max-ta:gap-[calc(100vw*(20/1700))]">
					{sectionItems.map((item, i) => {
						const isActive = activeItem === i;

						return (
							<li
								key={i}
								className="relative overflow-hidden"
								onMouseEnter={() => setActiveItem(i)}
							>
								<div
									className={`absolute inset-0 z-[1] transition-colors duration-500 ${
										isActive ? "bg-black/56" : "bg-black/0"
									}`}
								/>
								<div
									className={`relative h-[600px] max-ta:h-[calc(100vw*(600/1700))] transition-[width] duration-500 ${
										isActive
											? "w-[996px] max-ta:w-[calc(100vw*(860/1700))]"
											: "w-[300px] max-ta:w-[calc(100vw*(300/1700))]"
									}`}
								>
									<img
										src={isActive ? item.imgAfter : item.img}
										alt=""
										className="w-full h-full object-cover"
									/>
								</div>
								<div
									className={`absolute left-[80px] max-ta:left-[calc(100vw*(80/1700))] z-10 text-white transition-all duration-500 ${
										isActive
											? "top-1/2 -translate-y-1/2"
											: "top-[273px] max-ta:top-[calc(100vw*(273/1700))] translate-y-0"
									}`}
								>
									<span className="flex w-[54px] h-[54px] justify-center items-center mb-[64px] p-[10px] text-[30px] italic text-white rounded-full border border-white max-ta:w-[calc(100vw*(54/1700))] max-ta:h-[calc(100vw*(54/1700))] max-ta:mb-[calc(100vw*(64/1700))] max-ta:p-[calc(100vw*(10/1700))] max-ta:text-[calc(100vw*(30/1700))] max-mo:w-[calc(100vw*(20/360))] max-mo:h-[calc(100vw*(20/360))] max-mo:mb-[calc(100vw*(10/360))] max-mo:p-[calc(100vw*(5/360))] max-mo:text-[calc(100vw*(12/360))]">
										{item.num}
									</span>
									<div
										className={`text-white whitespace-nowrap transition-[opacity,visibility] duration-500 ${
											isActive ? "visible opacity-100" : "invisible opacity-0"
										}`}
									>
										<strong className="block mb-[24px] text-[38px] max-ta:mb-[calc(100vw*(24/1700))] max-ta:text-[calc(100vw*(38/1700))] max-mo:mb-[calc(100vw*(8/360))] max-mo:text-[calc(100vw*(14/360))] whitespace-pre-wrap">
											{item.title}
										</strong>
										{item.sub.map((s, j) => (
											<div
												key={j}
												className="text-[18px] max-ta:text-[calc(100vw*(18/1700))] max-mo:text-[calc(100vw*(7/360))]"
											>
												{s}
												<br />
											</div>
										))}
										<a
											href={item.href}
											className="block mt-[80px] text-[14px] font-medium max-ta:mt-[calc(100vw*(80/1700))] max-ta:text-[calc(100vw*(14/1700))] max-mo:mt-[calc(100vw*(5/360))] max-mo:text-[calc(100vw*(8/360))]"
										>
											View more
										</a>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
