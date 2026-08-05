import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
	{
		label: "피죤 소개",
		href: "/about/About",
		sub: [
			{ label: "회사 소개", href: "/about/About" },
			{ label: "회사 연혁", href: "/about/About" },
			{ label: "CEO 인사말", href: "/about/About" },
			{ label: "오시는 길", href: "/about/About" },
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
		label: "피죤 소식",
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
	const location = useLocation();

	// 페이지 이동 시 서브메뉴 닫기
	const [prevPathname, setPrevPathname] = useState(location.pathname);
	if (location.pathname !== prevPathname) {
		setPrevPathname(location.pathname);
		setIsOpen(false);
	}

	return (
		<header className="fixed top-0 left-0 z-[100000] w-full bg-white border-b border-[#eee]">
			<div className="flex items-center justify-between w-[1600px] mx-auto">
				<h1>
					<Link to="/" className="block w-[110px] h-[55px]">
						<img src="../../public/images/logo.png" alt="" />
					</Link>
				</h1>

				<div className="flex items-center justify-between w-[800px]">
					<nav
						className="relative flex items-center w-[508px] h-[90px] py-[15px]"
						onMouseEnter={() => setIsOpen(true)}
						onMouseLeave={() => setIsOpen(false)}
					>
						{/* 1depth 메뉴 */}
						<ul className="flex justify-between w-full">
							{navItems.map((item) => (
								<li key={item.label} className="w-[100px]">
									<Link
										to={item.href}
										className="block text-[18px] font-medium text-[#222] text-center"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>

						{/* 2depth 서브메뉴 */}
						<div
							className={`fixed top-[90px] left-0 w-full h-[400px] bg-white transition-opacity duration-300 ${
								isOpen
									? "opacity-100 pointer-events-auto"
									: "opacity-0 pointer-events-none"
							}`}
						>
							<div className="absolute top-[34px] left-1/2 -translate-x-1/2 ml-[255px] flex justify-between w-[508px]">
								{navItems.map((item) => (
									<ul key={item.label} className="flex flex-col gap-4">
										{item.sub &&
											item.sub.map((s) => (
												<li key={s.label} className="w-[100px]">
													<Link
														to={s.href}
														className="block text-[18px] font-medium text-[#222] text-center"
													>
														{s.label}
													</Link>
												</li>
											))}
									</ul>
								))}
							</div>
						</div>
					</nav>

					<div>
						<Link
							to="/"
							target="_blank"
							onClick={(e) => {
								e.preventDefault();
								alert("준비중입니다.");
							}}
							className="text-[18px] font-medium text-[#222] text-center"
						>
							피죤 공식몰
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
