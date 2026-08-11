export default function AboutBanner() {
	return (
		<section className="relative w-full h-[clamp(490px,calc(100vw*(980/1700)),980px)] mb-[clamp(50px,calc(100vw*(100/1700)),100px)] overflow-hidden">
			<img
				src="/images/about/about_bnr.jpg"
				alt="피죤 배너"
				className="w-full h-full object-cover"
			/>

			<div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

			<div className="absolute inset-0 flex flex-col justify-center px-16 text-white">
				<h3 className="text-[clamp(25px,calc(100vw*(50/1700)),50px)] font-bold leading-snug mb-4">
					다가오는 미래를 준비하는
					<br />
					주식회사 피죤
				</h3>
				<p className="text-sm leading-relaxed opacity-90 text-[clamp(12px,calc(100vw*(20/1700)),20px)]">
					(주)피죤은 지난 40여년 동안 환경을 최우선으로 고려하는 기업정신과
					세계적인 품질경쟁력을
					<br /> 경영 철학으로 삼아 고객만족을 실현해온 대한민국 대표 친환경
					종합생활용품 기업입니다.
					<br /> 이러한 노력을 기반으로 ㈜피죤은 탄탄한 시장을 점유한 것은 물론
					<br /> 갈수록 치열해지는 생활용품 시장에서 우수한 경쟁력을 확보하고
					있습니다.
				</p>
			</div>
		</section>
	);
}
