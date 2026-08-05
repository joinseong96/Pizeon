const linkItem = [
	{
		link: "개인정보처리방침",
	},
	{
		link: "회사소개",
	},
	{
		link: "이용약관",
	},
	{
		link: "이메일 무단수집거부",
	},
];

const infoItem = [
	{
		txt: "(주)피죤 서울특별시 강남구 논현로 531 (역삼동)",
	},
	{
		txt: "대표 : 이주연",
	},
	{
		txt: "사업자등록번호 : 122-81-11086",
	},
	{
		txt: "본사 : 02-3451-2000",
	},
	{
		txt: "(c) 2018 PIGEON All Rights Reserved.",
	},
];

const snsItem = [
	{
		img: "../../images/sns_ico01.png",
		href: "#",
	},
	{
		img: "../../images/sns_ico02.png",
		href: "#",
	},
	{
		img: "../../images/sns_ico03.png",
		href: "#",
	},
];

export default function Footer() {
	return (
		<footer className="border-t border-[#ededed]">
			<div className="w-[1636px] mx-auto py-[70px] flex justify-between">
				<div className="w-[920px] flex justify-between">
					<h2 className="w-[112px] h-[56px]">
						<img src="../../images/logo02.png" alt="" />
					</h2>
					<div className="w-[740px]">
						<div className="flex gap-[20px] mb-[24px]">
							{linkItem.map((item, i) => (
								<a
									key={i}
									href="#"
									className="text-[15px] font-bold text-[#222]"
								>
									{item.link}
								</a>
							))}
						</div>
						<div className="ft_info flex flex-wrap gap-[10px_24px]">
							{infoItem.map((item, i) => (
								<div key={i} className="text-[14px] text-[#444]">
									{item.txt}
								</div>
							))}
						</div>
					</div>
				</div>
				<ul className="sns_wp flex gap-[10px]">
					{snsItem.map((item, i) => (
						<li key={i}>
							<a href={item.href} className="flex gap-[10px]">
								<div className="cont_img w-[32px]">
									<img src={item.img} alt="" />
								</div>
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}
