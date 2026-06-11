import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
	{
		label: "피존 소개",
		href: "/",
		sub: [
			{
				label: "회사 소개",
				href: "/about/company",
			},
			{
				label: "회사 연혁",
				href: "/about/history",
			},
			{
				label: "CEO 인사말",
				href: "/about/ceo",
			},
			{
				label: "오시는 길",
				href: "/about/location",
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
		<header>
			<div className="hd_inner">
				<h1>
					<Link to="/">
						<img src="../../public/images/logo.png" alt="" />
					</Link>
				</h1>
				<div className="hd_cont">
					<nav
						onMouseEnter={() => setIsOpen(true)}
						onMouseLeave={() => setIsOpen(false)}
					>
						<ul className="main_menu_wp">
							{navItems.map((item) => (
								<li key={item.label}>
									<Link to={item.href}>{item.label}</Link>
								</li>
							))}
						</ul>
						<div className={`sub_menu_wp${isOpen ? " active" : ""}`}>
							<div className="lnb_inner">
								{navItems.map((item) => (
									<ul key={item.label}>
										{item.sub &&
											item.sub.map((s) => (
												<li key={s.label}>
													<Link to={s.href}>{s.label}</Link>
												</li>
											))}
									</ul>
								))}
							</div>
						</div>
					</nav>
					<div className="hd_btn_wp">
						<div className="lang_box">
							<span>KR</span>
						</div>
						<Link to="/" target="_blank">
							피죤 공식몰
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
