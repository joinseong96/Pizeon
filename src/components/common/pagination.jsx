import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
	const pages = Array.from({ length: totalPages }, (val, i) => i + 1);

	const btnClass =
		"w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-sm text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50";

	return (
		<div className="flex items-center justify-center gap-2">
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className={btnClass}
				aria-label="이전"
			>
				<ChevronLeft size={16} />
			</button>

			<div className="flex items-center gap-4 px-3">
				{pages.map((page) => (
					<button
						key={page}
						onClick={() => onPageChange(page)}
						className={
							page === currentPage
								? "text-sm font-bold text-blue-700 underline underline-offset-4"
								: "text-sm text-gray-500 hover:text-gray-800"
						}
					>
						{page}
					</button>
				))}
			</div>

			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className={btnClass}
				aria-label="다음"
			>
				<ChevronRight size={16} />
			</button>
		</div>
	);
}
