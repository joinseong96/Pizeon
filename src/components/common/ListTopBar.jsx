import { useRef } from "react";

const defaultOptions = ["제목", "내용", "작성자"];

export default function ListTopBar({
	currentPage = 1,
	totalPages = 1,
	totalCount = 0,
	options = defaultOptions,
}) {
	const selectRef = useRef(null);
	const inputRef = useRef(null);

	return (
		<div className="mb-[clamp(20px,calc(100vw*(40/1700)),40px)]">
			<div className="w-[1636px] mx-auto flex items-center justify-between max-ta:w-[calc(100vw*(1636/1700))] max-mo:relative max-mo:w-[calc(100vw*(320/360))] max-mo:flex-col max-mo:items-start max-mo:gap-[calc(100vw*(30/360))]">
				<p className="text-sm text-gray-600">
					[<span className="font-semibold text-black">{currentPage}</span> /{" "}
					{totalPages} 페이지] 총 {totalCount}건
				</p>

				<div className="flex items-center gap-2 max-mo:w-full">
					<select
						ref={selectRef}
						defaultValue={options[0]}
						className="border border-gray-300 rounded px-3 py-2 text-sm"
					>
						{options.map((opt) => (
							<option key={opt} value={opt}>
								{opt}
							</option>
						))}
					</select>

					<input
						ref={inputRef}
						type="text"
						defaultValue=""
						placeholder="검색어를 입력하세요."
						className="border border-gray-300 rounded px-3 py-2 text-sm w-64 max-mo:w-full"
					/>

					<button
						className="border border-gray-300 rounded px-3 py-2 text-sm max-mo:absolute max-mo:top-0 max-mo:right-0"
						aria-label="검색"
					>
						검색
					</button>
				</div>
			</div>
		</div>
	);
}
