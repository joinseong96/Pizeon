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
		<div className="py-4">
			<div className="w-[1636px]">
				<p className="text">
					[<span className="font-semibold text-black">{currentPage}</span> /{" "}
					{""} {totalPages} 페이지 ] 총 {totalCount}건
				</p>

				<select ref={selectRef} defaultvalue={options[0]}>
					{options.map((opt) => (
						<option key={opt} value={opt}>
							{opt}
						</option>
					))}
				</select>

				<input ref={inputRef} type="text" defaultvalue="" />
			</div>
		</div>
	);
}
