import { useEffect } from "react";

const slideItems = [
	{ img: "../images/main_slide01.jpg" },
	{ img: "../images/main_slide02.jpg" },
	{ img: "../images/main_slide03.png" },
	{ img: "../images/main_slide04.png" },
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
		<section className="main_bnr">
			<div className="swiper main_swiper">
				<div className="swiper-wrapper">
					{slideItems.map((item, i) => (
						<div key={i} className="swiper-slide">
							<div className="cont_img">
								<img src={item.img} alt="슬라이드 이미지" />
							</div>
							<div className="cont_txt">
								<strong>Best Quality Life Partner</strong>
								<p>
									44년의 노하우와 환경을 고려하는 기업정신으로
									<br />
									당신 곁에 오래 남겠습니다.
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="bnr_control">
				<div className="btn_wp">
					<div className="bnr_pagination">
						<span className="current">01</span>
						<span className="divider"> / </span>
						<span className="total">04</span>
					</div>

					<div className="bnr_nav">
						<button className="bnr_prev">‹</button>
						<button className="bnr_next">›</button>
						<button className="bnr_stop">■</button>
					</div>
				</div>
				<div className="bnr_progress">
					<div className="bnr_progress_bar"></div>
				</div>
			</div>
		</section>
	);
}
