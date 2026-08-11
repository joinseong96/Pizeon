import { useEffect } from "react";

const philosophyItems = [
	{
		img: "../images/about/about_slide01.png",
		subTitle: "Natural",
		title: "자연중심",
		desc: "피죤은 자연을 섬깁니다.\n자연으로 돌아갈 제품은 자연과\n가까워야 한다는 신념으로\n원료부터 패키지까지 친환경 제품을\n고집합니다.",
	},
	{
		img: "../images/about/about_slide02.png",
		subTitle: "Safe",
		title: "안전 성분",
		desc: "우리 생활과 밀접한 제품인 만큼\n성분에 집중합니다. 고객의 입장에서\n생각하고 만든 안전한 제품으로\n행복한 일상의 가치를 전달하겠습니다.",
	},
	{
		img: "../images/about/about_slide03.png",
		subTitle: "Quality",
		title: "품질 최우선",
		desc: "좋은 상품은 갑자기 탄생하는 것이 아니라 꾸준한 개발과 노력으로\n 만들어내는 것이라고 믿습니다.\n '신뢰'를 동반한 제품으로\n고객 만족을 이어가겠습니다.",
	},
];

export default function AboutPhilosophy() {
	useEffect(() => {
		if (!window.Swiper) return;
		new window.Swiper(".about_swiper", {
			loop: true,
			slidesPerView: 1,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			speed: 1200,
			allowTouchMove: false,
		});
	}, []);

	return (
		<section className="w-[clamp(100%,calc(100vw*(1636/1700)),1636px)] mx-auto mb-[clamp(50px,calc(100vw*(100/1700)),100px)]">
			<h3 className="text-[clamp(25px,calc(100vw*(50/1700)),50px)] font-bold text-center mb-[clamp(40px,calc(100vw*(80/1700)),80px)]">
				피죤철학
			</h3>
			<div className="swiper about_swiper">
				<div className="swiper-wrapper">
					{philosophyItems.map((item, i) => (
						<div key={i} className="swiper-slide">
							<div className="absolute top-[clamp(70px,calc(100vw*(140/1700)),140px)] w-[clamp(250px,calc(100vw*(470/1700)),470px)] left-[50%] transform translateX-[-50%] ml-[clamp(-300px,calc(100vw*(-600/1700)),-600px)] p-[clamp(27px,calc(100vw*(55/1700)),55px)] bg-[rgba(0,0,0,0.8)]">
								<p className="text-[clamp(12px,calc(100vw*(18/1700)),18px)] text-[rgba(255,255,255,0.6)] font-medium mb-3">
									{item.subTitle}
								</p>
								<h4 className="text-[clamp(12px,calc(100vw*(24/1700)),24px)] text-white font-semibold mb-5">
									{item.title}
								</h4>
								<p className="text-[clamp(12px,calc(100vw*(18/1700)),18px)] text-white whitespace-pre-line leading-relaxed">
									{item.desc}
								</p>
							</div>
							<div className="w-full h-[clamp(320px,calc(100vw*(640/1700)),640px)]">
								<img src={item.img} alt="피죤 철학" className="h-[100%]" />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
