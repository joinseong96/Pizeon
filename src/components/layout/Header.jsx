import { useState } from "react";

const navItems = [
	{
		label: "피존 소개",
		href: "about.html",
		sub: [
			{
				label: "회사 소개",
				href: "#",
			},
			{
				label: "회사 연혁",
				href: "#",
			},
			{
				label: "CEO 인사말",
				href: "#",
			},
			{
				label: "오시는 길",
				href: "#",
			},
		],
	},
	{
		label: "브랜드",
		href: "#",
		sub: [
			{ label: "전체", href: "#" },
			{ label: "피죤", href: "#" },
			{ label: "액츠", href: "#" },
			{ label: "퓨어", href: "#" },
			{ label: "무균무때", href: "#" },
			{ label: "칼랑한스", href: "#" },
			{ label: "습기제로", href: "#" },
			{ label: "울터치", href: "#" },
		],
	},
	{
		label: "피존 소식",
		href: "about.html",
		sub: [
			{ label: "인재채용", href: "#" },
			{ label: "문의하기", href: "#" },
		],
	},
	{
		label: "채용 및 문의",
		href: "#",
		sub: [
			{ label: "인재채용", href: "#" },
			{ label: "문의하기", href: "#" },
		],
	},
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<h1>
				<a href="#">
					<img src="" alt="" />
				</a>
			</h1>
			<div className="hd_cont">
				<nav>
					<ul>
						{navItems.map((item) => (
							<li key={item.label}>
								<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>
				</nav>
				{isOpen && (
					<div className="sub_menu_wp">
						{navItems.map((item) => (
							<ul key={item.label}>
								{item.sub &&
									item.sub.map((s) => (
										<li key={s.label}>
											<a href={s.href}>{s.label}</a>
										</li>
									))}
							</ul>
						))}
					</div>
				)}
				<div className="hd_btn_wp">
					<div className="lang_box">
						<span>KR</span>
					</div>
					<a href="#" target="_blank">
						피죤 공식몰
					</a>
				</div>
			</div>
		</header>
	);
}
