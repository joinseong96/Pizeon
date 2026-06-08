import { useState } from "react";

const sectionItems = [
	{
		num: "1",
		img: "/images/section01_01.jpg",
		title: "당신을 위한 완벽한 세탁세제! Act'z",
		tags: ["#강력 세척", "#효소 성분", "#실내 건조"],
		href: "#",
	},
	{
		num: "2",
		img: "/images/section01_01.jpg",
		title: "당신을 위한 완벽한 세탁세제! Act'z",
		tags: ["#강력 세척", "#효소 성분", "#실내 건조"],
		href: "#",
	},
	{
		num: "3",
		img: "/images/section01_01.jpg",
		title: "당신을 위한 완벽한 세탁세제! Act'z",
		tags: ["#강력 세척", "#효소 성분", "#실내 건조"],
		href: "#",
	},
];

export default function MainSection01() {
	const [activeItem, setActiveItem] = useState(1);

	return (
		<section className="main_sec01">
			<div className="sec_tit">
				<h2>품질 경쟁력을 위한 노력</h2>
				<p>피죤은 고도의 기술력을 가지고...</p>
			</div>
			<ul className="sec01_tit">
				{sectionItems.map((item, i) => (
					<li
						key={i}
						className={`sec01_item${activeItem === i ? " active" : ""}`}
						onMouseEnter={() => setActiveItem(i)}
					>
						<div className="cont_img">
							<img src={item.img} alt="" />
						</div>
						<span>{item.num}</span>
						<strong>{item.title}</strong>
						<a href={item.href}>View more</a>
					</li>
				))}
			</ul>
		</section>
	);
}
