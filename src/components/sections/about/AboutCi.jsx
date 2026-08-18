const ciColors = [
	{
		name: "Pigeon Dark Blue",
		pantone: "PANTONE 287C",
		rgb: "R:19, G:78, B:151",
		cmyk: "C:100, M:81, Y:0, K:0",
	},
	{
		name: "Pigeon Blue",
		pantone: "PANTONE 2995C",
		rgb: "R:31, G:159, B:220",
		cmyk: "C:75, M:23, Y:0, K:0",
	},
];

export default function AboutCi() {
	return (
		<section className="text-center w-[1636px] mx-auto mb-[clamp(50px,calc(100vw*(100/1700)),100px)] max-ta:w-[calc(100vw*(1636/1700))] max-mo:w-[calc(100vw*(320/360))]">
			<h3 className="text-[clamp(25px,calc(100vw*(50/1700)),50px)] font-bold mb-[clamp(10px,calc(100vw*(20/1700)),20px)]">
				피죤 CI
			</h3>
			<p className="text-[clamp(12px,calc(100vw*(20/1700)),20px)] text-gray-500 mb-10">
				자세한 CI(Corporate Identity) 활용과 규정은 파일을 다운로드하여
				확인하시기 바랍니다.
			</p>

			<div className="max-w-3xl mx-auto border border-gray-200 rounded-xl overflow-hidden text-left">
				<div className="grid grid-cols-2">
					<div className="flex flex-col items-center justify-center gap-3 p-10 bg-gray-50 max-mo:p-5">
						<img
							src="/images/about/about_logo.png"
							alt="피죤 로고"
							className="w-[clamp(190px,calc(100vw*(380/1700)),380px)]"
						/>
						<p className="text-[clamp(12px,calc(100vw*(14/1700)),14px)] text-gray-400 text-center">
							행복한 삶을 창조하는 최상의 생활문화 파트너
							<br /> Best Quality Life Partner
						</p>
					</div>

					<div className="divide-y divide-gray-200">
						{ciColors.map((color, i) => (
							<div
								key={i}
								className="flex items-center gap-10 p-10 max-mo:flex-col max-mo:gap-4 max-mo:p-4"
							>
								<div className="w-24">
									<p className="text-sm font-semibold whitespace-nowrap">
										{color.name}
									</p>
									<p className="text-xs text-gray-400">{color.pantone}</p>
								</div>
								<div className="flex-1 bg-[#1f4e97] text-white text-xs rounded px-3 py-2 space-y-1">
									<p>RGB {color.rgb}</p>
									<p>CMYK {color.cmyk}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="flex justify-center gap-3 mt-6">
				<button className="px-5 py-2 rounded-full text-[clamp(12px,calc(100vw*(15/1700)),15px)] border bg-[#1f4e97] text-white border-[#1f4e97]">
					Basic ↓
				</button>
				<button className="px-5 py-2 rounded-full text-[clamp(12px,calc(100vw*(15/1700)),15px)] border border-gray-300 text-gray-600">
					AI ↓
				</button>
			</div>
		</section>
	);
}
