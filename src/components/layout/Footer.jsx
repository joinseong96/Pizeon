const linkItem = [
	{ link: "개인정보처리방침" },
	{ link: "회사소개" },
	{ link: "이용약관" },
	{ link: "이메일 무단수집거부" },
];

const infoItem = [
	{ txt: "(주)피죤 서울특별시 강남구 논현로 531 (역삼동)" },
	{ txt: "대표 : 이주연" },
	{ txt: "사업자등록번호 : 122-81-11086" },
	{ txt: "본사 : 02-3451-2000" },
	{ txt: "(c) 2018 PIGEON All Rights Reserved." },
];

const snsItem = [
	{ img: "../../images/sns_ico01.png", href: "#" },
	{ img: "../../images/sns_ico02.png", href: "#" },
	{ img: "../../images/sns_ico03.png", href: "#" },
];

export default function Footer() {
	return (
		<footer className="border-t border-[#ededed]">
			<div className="w-[1636px] mx-auto py-[70px] flex justify-between max-ta:w-[calc(100vw*(1636/1700))] max-ta:py-[calc(100vw*(70/1700))] max-mo:relative max-mo:w-[calc(100vw*(320/360))] max-mo:py-[calc(100vw*(35/360))]">
				<div className="w-[920px] flex justify-between max-ta:w-[calc(100vw*(920/1700))] max-mo:flex-col max-mo:gap-[calc(100vw*(40/360))] max-mo:w-full">
					<h2 className="w-[112px] h-[56px] max-ta:w-[calc(100vw*(112/1700))] max-ta:h-[calc(100vw*(56/1700))] max-mo:w-[calc(100vw*(66/360))] max-mo:h-[calc(100vw*(33/360))]">
						<img
							src="../../images/logo02.png"
							alt=""
							className="w-full h-full object-contain"
						/>
					</h2>
					<div className="w-[740px] max-ta:w-[calc(100vw*(740/1700))] max-mo:w-full">
						<div className="flex gap-[20px] mb-[24px] max-ta:gap-[calc(100vw*(20/1700))] max-ta:mb-[calc(100vw*(24/1700))] max-mo:gap-[calc(100vw*(13/360))] max-mo:mb-[calc(100vw*(20/360))]">
							{linkItem.map((item, i) => (
								<a
									key={i}
									href="#"
									className="text-[15px] font-bold text-[#222] max-ta:text-[calc(100vw*(15/1700))] max-mo:text-[calc(100vw*(12/360))]"
								>
									{item.link}
								</a>
							))}
						</div>
						<div className="ft_info flex flex-wrap gap-[10px_24px] max-ta:gap-y-[calc(100vw*(10/1700))] max-ta:gap-x-[calc(100vw*(24/1700))] max-mo:gap-y-[calc(100vw*(6/360))] max-mo:gap-x-[calc(100vw*(18/360))]">
							{infoItem.map((item, i) => (
								<div
									key={i}
									className="text-[14px] text-[#444] max-ta:text-[calc(100vw*(14/1700))] max-mo:text-[calc(100vw*(13/360))]"
								>
									{item.txt}
								</div>
							))}
						</div>
					</div>
				</div>
				<ul className="sns_wp flex gap-[10px] max-ta:gap-[calc(100vw*(10/1700))] max-mo:absolute max-mo:top-[calc(100vw*(35/360))] max-mo:right-0 max-mo:gap-[calc(100vw*(8/360))]">
					{snsItem.map((item, i) => (
						<li key={i}>
							<a href={item.href}>
								<div className="cont_img w-[32px] max-ta:w-[calc(100vw*(32/1700))] max-mo:w-[calc(100vw*(28/360))]">
									<img src={item.img} alt="" className="w-full h-auto" />
								</div>
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}
