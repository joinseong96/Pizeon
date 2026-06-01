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
		new window.Swiper(".swiper", {
			loop: true,
			// autoplay: { delay: 4000 },
		});
	}, []);

	return (
		<section className="main_bnr">
			<div className="swiper">
				<div className="swiper-wrapper">
					{slideItems.map((item, i) => (
						<div key={i} className="swiper-slide">
							<div className="cont_img">
								<img src={item.img} alt="슬라이드 이미지" />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
