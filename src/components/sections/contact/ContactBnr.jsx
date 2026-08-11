export default function ContactBnr() {
	return (
		<div className="relative">
			<div className="w-full h-[clamp(430px,calc(100vw*(860/1700)),860px)]">
				<img
					src="../../images/contact/contact_img.jpg"
					alt="채용 및 문의 배너"
					className="w-full h-[100%]"
				/>
			</div>
			<p className="absolute top-[50%] left-[50%] translate-[-50%] ml-[clamp(-120px,calc(100vw*(-340/1700)),-340px)] text-[clamp(23px,calc(100vw*(46/1700)),46px)] text-[#fff] font-semibold">
				피죤은 회사의 지속적인 성장과
				<br /> 발전을 함께 만들어 갈 '항진, 창의, 화합형'
				<br />
				인재를 찾고 있습니다.
			</p>
		</div>
	);
}
