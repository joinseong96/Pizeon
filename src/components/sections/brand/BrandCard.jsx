export default function BrandCard() {
	const brandItems = [
		{
			title: "피죤",
			desc: "명품 향수같은 특별한\n Perfume 향기",
			img: "../images/brand/brand_img01.png",
			alt: "피죤",
			width: "w-[clamp(520px,calc(100vw*(1084/1700)),1084px)]",
		},
		{
			title: "퓨어",
			desc: "잦은 손 세정에도 걱정없는\n 촉촉 핸드솝",
			img: "../images/brand/brand_img02.png",
			alt: "퓨어",
			width: "w-[clamp(255px,calc(100vw*(532/1700)),532px)]",
		},
		{
			title: "무균무때",
			desc: "옥수수와 곡물로 발효한\n 발효주정 70% 함유",
			img: "../images/brand/brand_img03.png",
			alt: "무균무때",
			width: "w-[clamp(255px,calc(100vw*(532/1700)),532px)]",
		},
		{
			title: "액츠",
			desc: "빨래에 대한 고민은 많아도\n 해결은 간단!",
			img: "../images/brand/brand_img04.png",
			alt: "액츠",
			width: "w-[clamp(520px,calc(100vw*(1084/1700)),1084px)]",
		},
		{
			title: "울터치",
			desc: "소중하고 아끼는 모든 옷을 위한\n 섬세한 터치",
			img: "../images/brand/brand_img05.png",
			alt: "울터치",
			width: "w-[clamp(255px,calc(100vw*(532/1700)),532px)]",
		},
		{
			title: "습기제로",
			desc: "유해물질 무첨가로 더욱 안전하고\n 강력한 제습제",
			img: "../images/brand/brand_img06.png",
			alt: "습기제로",
			width: "w-[clamp(255px,calc(100vw*(532/1700)),532px)]",
		},
		{
			title: "칼앤할스",
			desc: "칼앤한스가 당신에게\n 심플한 해답을 제시합니다.",
			img: "../images/brand/brand_img07.png",
			alt: "칼앤한스",
			width: "w-[clamp(255px,calc(100vw*(532/1700)),532px)]",
		},
	];

	return (
		<section className="w-[1636px] m-auto max-ta:w-[calc(100vw*(1638/1700))] max-mo:w-[calc(100vw*(320/360))]">
			<ul className="flex flex-wrap gap-[clamp(10px,calc(100vw*(20/1700)),20px)]">
				{brandItems.map((item, i) => (
					<li
						key={i}
						className={`relative group after:content-[''] after:absolute after:inset-0
            after:bg-black/0 hover:after:bg-black/60
            after:transition-colors after:duration-300 cursor-pointer ${item.width}`}
					>
						<div className="h-[clamp(350px,calc(100vw*(700/1700)),700px)]">
							<img
								className="w-[100%] h-[100%]"
								src={item.img}
								alt={item.alt}
							/>
						</div>
						<div className="absolute top-[50%] left-[clamp(35px,calc(100vw*(70/1700)),70px)] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
							<strong className="block text-[#fff] font-semibold text-[clamp(22px,calc(100vw*(45/1700)),45px)] mb-[clamp(10px,calc(100vw*(10/1700)),10px)]">
								{item.title}
							</strong>
							<p className="text-[#fff] text-[clamp(12px,calc(100vw*(20/1700)),20px)]">
								{item.desc}
							</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
