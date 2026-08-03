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
			<div className="inner">
				<div className="ft_cont">
					<h2>
						<img src="../../images/logo02.png" alt="" />
					</h2>
					<div className="cont_txt">
						<div className="terms_wp">
							<a href="#">개인정보처리방침</a>
							<a href="#">회사소개</a>
							<a href="#">이용약관</a>
							<a href="#">이메일 무단수집거부</a>
						</div>
						<div className="ft_info">
							<div>(주)피죤 서울특별시 강남구 논현로 531 (역삼동)</div>
							<div>대표 : 이주연</div>
							<div>사업자등록번호 : 122-81-11086</div>
							<div>고객상담실 : 02-3451-2000</div>
							<div>(c) 2022 PIGEON All Rights Reserved.</div>
						</div>
					</div>
				</div>
				<ul className="sns_wp">
					{snsItem.map((item, i) => (
						<li key={i}>
							<a href={item.href}>
								<div className="cont_img">
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
