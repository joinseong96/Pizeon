export default function PageTitle({ title }) {
	return (
		<div className="text-center">
			<h2 className="text-[clamp(28px,calc(100vw*(52/1700)),52px)] font-semibold text-[#111] mb-[clamp(40px,calc(100vw*(80/1700)),80px)]">
				{title}
			</h2>
		</div>
	);
}
