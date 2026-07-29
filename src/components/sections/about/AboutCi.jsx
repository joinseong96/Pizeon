import { useState } from "react";

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
	const [fileType, setFileType] = useState("Basic");

	return (
		<section className="py-16 text-center w-[1636px] m-auto">
			<h3 className="text-[50px] font-bold mb-[20px]">피죤 CI</h3>
			<p className="text-[20px] text-gray-500 mb-10">
				자세한 CI(Corporate Identity) 활용과 규정은 파일을 다운로드하여
				확인하시기 바랍니다.
			</p>

			<div className="max-w-3xl mx-auto border border-gray-200 rounded-xl overflow-hidden text-left">
				<div className="grid grid-cols-2">
					<div className="flex flex-col items-center justify-center gap-3 p-10 bg-gray-50">
						<img
							src="/images/about/about_logo.png"
							alt="피죤 로고"
							className="w-[380px]"
						/>
						<p className="text-[14px] text-gray-400 text-center">
							행복한 삶을 창조하는 최상의 생활문화 파트너
							<br /> Best Quality Life Partner
						</p>
					</div>

					<div className="divide-y divide-gray-200">
						{ciColors.map((color, i) => (
							<div key={i} className="flex items-center gap-10 p-10">
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
				<button
					onClick={() => setFileType("Basic")}
					className={`px-5 py-2 rounded-full text-[15px] border ${
						fileType === "Basic"
							? "bg-[#1f4e97] text-white border-[#1f4e97]"
							: "border-gray-300 text-gray-600"
					}`}
				>
					Basic ↓
				</button>
				<button
					onClick={() => setFileType("Ai")}
					className={`px-5 py-2 rounded-full text-[15px] border ${
						fileType === "Ai"
							? "bg-[#1f4e97] text-white border-[#1f4e97]"
							: "border-gray-300 text-gray-600"
					}`}
				>
					AI ↓
				</button>
			</div>
		</section>
	);
}
