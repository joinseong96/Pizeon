import { useState, useEffect } from "react";
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

const mobileBreak = 1700;

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [openMbIndex, setOpenMbIndex] = useState(null);
	const [isMbMenuOpen, setIsMbMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (isMbMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isMbMenuOpen]);

	// 페이지 이동 시 서브메뉴 닫기
	const [prevPathname, setPrevPathname] = useState(location.pathname);
	if (location.pathname !== prevPathname) {
		setPrevPathname(location.pathname);
		setIsOpen(false);
		setOpenMbIndex(null);
		setIsMbMenuOpen(false);
	}

	const handleNavClick = (e, i) => {
		if (window.matchMedia(`(max-width: ${mobileBreak}px)`).matches) {
			e.preventDefault();
			setOpenMbIndex((prev) => (prev === i ? null : i));
		}
	};

	return (
		<header className="fixed top-0 left-0 z-[1000] w-full bg-white border-b border-[#eee] max-mo:pt-[calc(100vw*(15/360))] max-mo:pb-[calc(100vw*(15/360))]">
			<div className="flex items-center justify-between w-[1600px] mx-auto max-ta:w-[calc(100vw*(1500/1700))] max-mo:justify-center">
				<h1>
					<Link
						to="/"
						className="block w-[110px] h-[55px] max-ta:w-[calc(100vw*(110/1700))] max-ta:h-[calc(100vw*(55/1700))] max-mo:w-[calc(100vw*(66/360))] max-mo:h-[calc(100vw*(30/360))]"
					>
						<img src="../../public/images/logo.png" alt="" />
					</Link>
				</h1>

				<button
					type="button"
					onClick={() => setIsMbMenuOpen((prev) => !prev)}
					className="hidden max-mo:flex max-mo:absolute max-mo:right-[calc(100vw*(15/360))] max-mo:top-1/2 max-mo:-translate-y-1/2 max-mo:w-[calc(100vw*(25/360))] max-mo:h-[calc(100vw*(25/360))] max-mo:items-center max-mo:justify-center cursor-pointer"
				>
					{isMbMenuOpen ? (
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<line x1="4" y1="4" x2="20" y2="20" />
							<line x1="20" y1="4" x2="4" y2="20" />
						</svg>
					) : (
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<line x1="3" y1="6" x2="21" y2="6" />
							<line x1="3" y1="12" x2="21" y2="12" />
							<line x1="3" y1="18" x2="21" y2="18" />
						</svg>
					)}
				</button>

				<div
					className={`flex items-center justify-between w-[800px] max-ta:w-[calc(100vw*(800/1700))] max-mo:w-full max-mo:h-[100vh] max-mo:absolute max-mo:top-[calc(100vw*(60/360))] max-mo:left-0 max-mo:p-[calc(100vw*(40/360))] max-mo:flex-col-reverse max-mo:gap-[calc(100vw*(50/360))] max-mo:items-start max-mo:bg-[#fff] ${
						isMbMenuOpen ? "max-mo:flex" : "max-mo:hidden"
					}`}
				>
					<nav
						className="relative flex items-center w-[508px] h-[90px] py-[15px] max-ta:w-[calc(100vw*(508/1700))] max-ta:h-[calc(100vw*(90/1700))] max-ta:py-[calc(100vw*(15/1700))] max-mo:p-0 max-mo:w-full max-mo:h-[100%] max-mo:items-start"
						onMouseEnter={() => setIsOpen(true)}
						onMouseLeave={() => setIsOpen(false)}
					>
						{/* 1depth 메뉴 */}
						<ul className="flex justify-between w-full max-mo:flex-col max-mo:gap-[calc(100vw*(40/360))]">
							{navItems.map((item, i) => (
								<li
									key={item.label}
									className="w-[100px] max-ta:w-[calc(100vw*(100/1700))] max-mo:w-full"
								>
									<Link
										to={item.href}
										onClick={(e) => handleNavClick(e, i)}
										className="block text-[18px] font-medium text-[#222] text-center max-ta:text-[calc(100vw*(18/1700))] max-mo:text-[calc(100vw*(20/360))] max-mo:text-start"
									>
										{item.label}
										<span
											className={`hidden max-mo:inline-block max-mo:transition-transform max-mo:duration-200 ${
												openMbIndex === i ? "max-mo:rotate-180" : ""
											}`}
										>
											▾
										</span>
									</Link>
									<ul
										className={`hidden max-mo:block max-mo:overflow-hidden ${
											openMbIndex === i
												? "max-mo:transition-all max-mo:duration-300 max-mo:max-h-[500px] max-mo:mt-[calc(100vw*(20/360))]"
												: "max-mo:max-h-0"
										} max-mo:flex max-mo:flex-col max-mo:gap-[calc(100vw*(20/360))] max-mo:pl-[calc(100vw*(20/360))]`}
									>
										{item.sub &&
											item.sub.map((s) => (
												<li key={s.label}>
													<Link
														to={s.href}
														className="block text-[calc(100vw*(16/360))] text-[#666]"
													>
														{s.label}
													</Link>
												</li>
											))}
									</ul>
								</li>
							))}
						</ul>

						{/* 2depth 서브메뉴 */}
						<div
							className={`fixed top-[90px] left-0 w-full h-[400px] bg-white transition-opacity duration-300 ${
								isOpen
									? "opacity-100 pointer-events-auto"
									: "opacity-0 pointer-events-none"
							} max-ta:top-[calc(100vw*(90/1700))] max-ta:h-[calc(100vw*(480/1700))] max-mo:hidden`}
						>
							<div className="absolute top-[34px] left-1/2 -translate-x-1/2 ml-[255px] flex justify-between w-[508px] max-ta:w-[calc(100vw*(508/1700))] max-ta:top-[calc(100vw*(34/1700))] max-ta:ml-[calc(100vw*(200/1700))]">
								{navItems.map((item) => (
									<ul key={item.label} className="flex flex-col gap-4">
										{item.sub &&
											item.sub.map((s) => (
												<li
													key={s.label}
													className="w-[100px] max-ta:w-[calc(100vw*(100/1700))]"
												>
													<Link
														to={s.href}
														className="block text-[18px] font-medium text-[#222] text-center max-ta:text-[calc(100vw*(18/1700))]"
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

					<Link
						to="/"
						target="_blank"
						onClick={(e) => {
							e.preventDefault();
							alert("준비중입니다.");
						}}
						className="text-[18px] font-medium text-[#222] text-center max-ta:text-[calc(100vw*(18/1700))] max-mo:text-[calc(100vw*(13/360))]"
					>
						피죤 공식몰
					</Link>
				</div>
			</div>
		</header>
	);
}
