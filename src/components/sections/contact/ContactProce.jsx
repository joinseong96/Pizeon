import { ChevronRight } from "lucide-react";

const proceItems = [
	{
		txt: "입사지원",
		num: "1",
	},
	{
		txt: "서류전형",
		num: "2",
	},
	{
		txt: "필기전형",
		num: "3",
	},
	{
		txt: "직무면접",
		num: "4",
	},
	{
		txt: "임원면접",
		num: "5",
	},
];

const typeList = [
	{
		tit: "서류전형",
		txt: "서류전형은 입사지원자가 보유한 능력과 경력, 자격사항 뿐만 아니라 직무 적합성과 회사에 임하는 자세, 가치관 등을 종합적으로 고려하여 평가합니다.",
	},
	{
		tit: "필기전형",
		txt: "필기전형에서는 피죤에서 직무 수행을 위해 요구되는 역량을 다양하고 종합적인 관점에서 측정하는 검사를 실시합니다.",
		list: [
			{
				item: "일하는 데 필요한 복합적이고 고차원적인 사고능력을 측정하는 인지역량",
			},
			{
				item: "일하면서 부딪치는 문제상황에서 적절한 판단을 내릴 수 있는지를 측정하는 실행역량",
			},
			{
				item: "일하는 데 적합한 성격, 가치관, 태도를 갖추고 있는지 측정하는 심층역량",
			},
		],
	},
	{
		tit: "면접전형",
		txt: "가치관, 패기, 조직 적응도와 같은 자질/능력 부분과 업무수행 경험/관련지식과 같은 직무전문성 부분을 심층적, 다각적으로 평가하며\n회사와 함께 성장 가능한 인재인지를 평가합니다.",
		list: [
			{
				item: "인성면접 : 개별 면접 방식으로 가치관, 패기 등의 인성 및 회사에 임하는 자세 평가",
			},
			{
				item: "토론면접 : 3~4명씩 조를 이루어 면접을 진행하며 이슈에 대한 토론을 통해 리더십과 가치관, 커뮤니케이션 능력을 평가",
			},
			{
				item: "상황해결과제 : 특정 상황에 대한 기획력, 문제해결능력, 프레젠테이션 스킬을 평가",
			},
		],
	},
];

const methodList = [
	{
		tit: "채용방식",
		txt: "대졸신입사원/경력사원 채용 대졸신입사원 및 경력사원 채용은 충원이 필요한 직무에 대해 연중 수시로 실시합니다.",
	},
	{
		tit: "지원방식",
		txt: "홈페이지에서 채용공고 확인과 온라인 입사지원을 할 수 있습니다.",
		button: { btnTit: "채용공고 확인" },
	},
	{
		tit: "채용문의",
		txt: "채용 관련 문의사항은 고객문의를 이용해 주세요. 최대한 빠른 시간 안에 답변해 드리겠습니다.",
	},
];

export default function ContactProce() {
	return (
		<div className="pt-[clamp(75px,calc(100vw*(150/1700)),150px)] py-[clamp(75px,calc(100vw*(150/1700)),150px)] bg-[#fbfbfb]">
			<div className="w-[clamp(590px,calc(100vw*(1436/1700)),1436px)] mx-auto flex flex-col justify-between ">
				<h3 className="mb-[clamp(50px,calc(100vw*(100/1700)),100px)] text-[#222] text-[clamp(23px,calc(100vw*(46/1700)),46px)] font-semibold">
					채용절차
				</h3>
				<div>
					<ul className="flex mb-[clamp(40px,calc(100vw*(80/1700)),80px)]">
						{proceItems.map((item, i) => (
							<li
								key={i}
								className="relative w-[clamp(120px,calc(100vw*(240/1700)),240px)] h-[clamp(120px,calc(100vw*(240/1700)),240px)] ml-[clamp(-15px,calc(100vw*(-30/1700)),-30px)] flex justify-center items-center border border-[#dcdcdc] rounded-[50%]"
							>
								<span className="text-[#222] text-[clamp(12px,calc(100vw*(22/1700)),22px)] font-semibold">
									{item.txt}
								</span>
								<div className="absolute top-[50%] left-[50%] translate-[-50%] text-[rgba(34,34,34,0.05)] text-[clamp(50px,calc(100vw*(100/1700)),100px)] font-extrabold">
									{item.num}
								</div>
							</li>
						))}
					</ul>
					<div>
						{typeList.map((item) => (
							<div
								key={item.tit}
								className="mb-[clamp(20px,calc(100vw*(40/1700)),40px)]"
							>
								<h4 className="mb-[clamp(6px,calc(100vw*(12/1700)),12px)] text-[#000] text-[clamp(12px,calc(100vw*(18/1700)),18px)] font-semibold">
									{item.tit}
								</h4>
								<p className="whitespace-pre-line text-[#444] text-[clamp(12px,calc(100vw*(18/1700)),18px)]">
									{item.txt}
								</p>
								{item.list && (
									<ul className="mt-[clamp(6px,calc(100vw*(12/1700)),12px)]">
										{item.list.map((li, i) => (
											<li
												key={i}
												className="mb-[clamp(4px,calc(100vw*(8/1700)),8px)] ml-[20px] text-[#444] text-[clamp(12px,calc(100vw*(16/1700)),16px)] list-disc"
											>
												{li.item}
											</li>
										))}
									</ul>
								)}
							</div>
						))}
					</div>
					<ul className="pt-[clamp(40px,calc(100vw*(80/1700)),80px)] flex gap-[clamp(100px,calc(100vw*(200/1700)),200px)] border-t border-[#f1f1f1]">
						{methodList.map((item, i) => (
							<li
								key={i}
								className="w-[clamp(130px,calc(100vw*(240/1700)),240px)]"
							>
								<strong className="block mb-[clamp(8px,calc(100vw*(16/1700)),16px)] text-[#000] text-[clamp(12px,calc(100vw*(24/1700)),24px)] font-semibold">
									{item.tit}
								</strong>
								<p className="text-[#444] text-[clamp(12px,calc(100vw*(16/1700)),16px)] leading-relaxed">
									{item.txt}
								</p>
								{item.button && (
									<button className="mt-[clamp(15px,calc(100vw*(30/1700)),30px)] flex gap-[clamp(10px,calc(100vw*(40/1700)),60px)] justify-center items-center w-[clamp(120px,calc(100vw*(192/1700)),192px)] h-[clamp(40px,calc(100vw*(54/1700)),54px)] text-[clamp(12px,calc(100vw*(16/1700)),16px)] font-semibold text-[#222] border border-[#222]">
										{item.button.btnTit} <ChevronRight size={16} />
									</button>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
