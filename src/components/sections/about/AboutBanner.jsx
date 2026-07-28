export default function AboutBanner() {
	return (
		<section className="relative w-full h-[980px] overflow-hidden">
			{/* 배경 이미지 - 실제 이미지 경로로 교체 */}
			<img
				src="/images/about/about_bnr.jpg"
				alt="피존 배너"
				className="w-full h-full object-cover"
			/>

			{/* 이미지 위 어두운 그라데이션 오버레이 */}
			<div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

			{/* 오버레이 텍스트 */}
			<div className="absolute inset-0 flex flex-col justify-center px-16 text-white max-w-xl">
				<h3 className="text-2xl font-bold leading-snug mb-4">
					다가오는 미래를 준비하는
					<br />
					주식회사 피존
				</h3>
				<p className="text-sm leading-relaxed opacity-90">
					(주)피존은 새싹 원료를 기반으로 소비자의 건강한 삶을 위해 최선을
					다하는 기업으로서, 자연에서 얻은 순수한 원료를 정성껏 담아 고객님께
					믿고 사용하실 수 있는 제품을 만들고 있습니다.
				</p>
			</div>
		</section>
	);
}
