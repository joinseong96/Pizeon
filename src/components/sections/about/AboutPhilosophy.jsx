// 배경 이미지 위에 흩어져 놓이는 3개 항목
// 캡처처럼 위치가 제각각이라 absolute + 퍼센트 좌표로 배치
const philosophyItems = [
	{
		title: "자연중심",
		desc: "피존은 자연을 담습니다.\n자연에서 얻은 성분과\n가치있는 원료로 만듦으로\n고객님을 생각합니다.",
		position: "top-1/2 left-8 -translate-y-1/2", // 왼쪽 카드형
		style: "card",
	},
	{
		title: "엄선 성분",
		desc: "",
		position: "top-8 right-40",
		style: "label",
	},
	{
		title: "품질 최우선",
		desc: "",
		position: "bottom-10 right-16",
		style: "label",
	},
];

export default function AboutPhilosophy() {
	return (
		<section className="py-16">
			<h3 className="text-2xl font-bold text-center mb-10">피존철학</h3>

			<div className="relative w-full h-[420px] overflow-hidden">
				{/* 배경 이미지 - 실제 이미지 경로로 교체 */}
				<img
					src="/images/about/philosophy.jpg"
					alt="피존 철학"
					className="w-full h-full object-cover"
				/>

				{philosophyItems.map((item, i) =>
					item.style === "card" ? (
						// 왼쪽 텍스트 카드형 항목
						<div
							key={i}
							className={`absolute ${item.position} bg-white/90 rounded-lg p-6 max-w-xs`}
						>
							<p className="text-xs text-[#5b7a6a] font-semibold mb-2">
								Natural
							</p>
							<h4 className="text-lg font-bold mb-3">{item.title}</h4>
							<p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
								{item.desc}
							</p>
						</div>
					) : (
						// 이미지 위 짧은 라벨형 항목
						<span
							key={i}
							className={`absolute ${item.position} text-white text-sm font-medium`}
						>
							{item.title}
						</span>
					),
				)}
			</div>
		</section>
	);
}
