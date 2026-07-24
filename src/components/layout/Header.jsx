import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
	{
		label: "피존 소개",
		href: "/about/About",
		sub: [
			{
				label: "회사 소개",
				href: "/about/About",
			},
			{
				label: "회사 연혁",
				href: "/about/About",
			},
			{
				label: "CEO 인사말",
				href: "/about/About",
			},
			{
				label: "오시는 길",
				href: "/about/About",
			},
		],
	},
	{
		label: "브랜드",
		href: "/brand/Brand",
		sub: [
			{ label: "전체", href: "/brand/Brand" },
			{ label: "피죤", href: "/brand/Brand" },
			{ label: "액츠", href: "/brand/Brand" },
			{ label: "퓨어", href: "/brand/Brand" },
			{ label: "무균무때", href: "/brand/Brand" },
			{ label: "칼랑한스", href: "/brand/Brand" },
			{ label: "습기제로", href: "/brand/Brand" },
			{ label: "울터치", href: "/brand/Brand" },
		],
	},
	{
		label: "피존 소식",
		href: "/news/News",
		sub: [
			{ label: "인재채용", href: "/news/News" },
			{ label: "문의하기", href: "/news/News" },
		],
	},
	{
		label: "채용 및 문의",
		href: "/contact/Contact",
		sub: [
			{ label: "인재채용", href: "/contact/Contact" },
			{ label: "문의하기", href: "/contact/Contact" },
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
						<Link to="/" target="_blank">
							피죤 공식몰
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
