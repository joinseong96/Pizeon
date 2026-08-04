import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slideItems = [
	{
		tit: "Best Quality Life Partner",
		txt: "44년의 노하우와 환경을 고려하는 기업정신으로 당신 곁에 오래 남겠습니다.",
		img: "../images/main_slide01.jpg",
	},
	{
		tit: "New Products",
		txt: "피죤의 신제품 디퓨저, 세가지 향을 지금 경험해보세요.",
		img: "../images/main_slide02.jpg",
	},
	{
		tit: "PIGEON",
		txt: "불필요한 증점제와 색소는 빼고 3배 더 강화되어 풍부해진 향기를 경험해보세요.",
		img: "../images/main_slide03.png",
	},
	{
		tit: "빨래엔 피죤",
		txt: "2주 동안 머무는 퍼퓸향기 초고농축 피죤 시그니처",
		img: "../images/main_slide04.png",
	},
];

export default function MainBanner() {
	useEffect(() => {
		if (!window.Swiper) return;
		const swiper = new window.Swiper(".main_swiper", {
			loop: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			speed: 800,
			on: {
				slideChange: function () {
					const bar = document.querySelector(".bnr_progress_bar");
					if (bar) {
						bar.style.animation = "none";
						bar.offsetHeight;
						bar.style.animation = "progress 4s linear forwards";
					}

					const current = document.querySelector(".current");
					if (current) {
						current.textContent = String(this.realIndex + 1).padStart(2, "0");
					}
				},
			},
		});

		const bar = document.querySelector(".bnr_progress_bar");
		if (bar) {
			bar.style.animation = "progress 4s linear forwards";
		}

		document
			.querySelector(".bnr_prev")
			.addEventListener("click", () => swiper.slidePrev());
		document
			.querySelector(".bnr_next")
			.addEventListener("click", () => swiper.slideNext());
		document.querySelector(".bnr_stop").addEventListener("click", () => {
			if (swiper.autoplay.running) {
				swiper.autoplay.stop();
			} else {
				swiper.autoplay.start();
			}
		});
	}, []);

	return (
		<section>
			<div className="swiper main_swiper w-full h-[953px]">
				<div className="swiper-wrapper">
					{slideItems.map((item, i) => (
						<div key={i} className="swiper-slide">
							<div>
								<img src={item.img} alt="슬라이드 이미지" />
							</div>
							<div className="w-[440px] absolute top-[340px] left-[50%] translate-x-[-50%] ml-[-620px]">
								<strong className="block mb-[42px] text-[72px] text-[#111] leading-[1.2]">
									{item.tit}
								</strong>
								<p className="text-[22px] text-[#432f2f]">{item.txt}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="w-[270px] absolute bottom-[200px] left-[50%] translate-x-[-50%] ml-[-700px] z-100">
				<div className="flex justify-between items-center mb-[30px]">
					<div>
						<span className="current">01</span>
						<span className="divider"> / </span>
						<span className="total">04</span>
					</div>

					<div className="flex items-center gap-[20px]">
						<button className="bnr_prev text-[20px]">
							<ChevronLeft size={16} />
						</button>
						<button className="bnr_next">
							<ChevronRight size={16} />
						</button>
						<button className="bnr_stop">■</button>
					</div>
				</div>
				<div className="bnr_progress w-full h-[2px] bg-[rgba(0,0,0,0.2)]">
					<div className="bnr_progress_bar w-0 h-[100%] bg-[#222]"></div>
				</div>
			</div>
		</section>
	);
}
