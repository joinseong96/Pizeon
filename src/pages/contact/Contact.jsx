import PageTitle from "../../components/common/PageTitle";
import ContactBnr from "../../components/sections/contact/ContactBnr";
import ContactProce from "../../components/sections/contact/ContactProce";

export default function Contact() {
	return (
		<div className="pt-[clamp(75px,calc(100vw*(150/1700)),150px)]">
			<PageTitle title="채용 및 문의" />
			<ContactBnr />
			<ContactProce />
		</div>
	);
}
