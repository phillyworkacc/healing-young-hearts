'use client'
import CustomSection from "@/components/CustomSection/CustomSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header"
import Hero from "@/components/Hero/Hero"
import { CustomImgIcon } from "@/components/Icons/Icon";
import Spacing from "@/components/Spacing/Spacing";
import { useRouter } from "next/navigation";

export const websiteConfig = {
	headerBackgroundColor: "#cee1e6",
	headerTextColor: "#000",
	accentColor: "#749ca5",
	heroDescription: "Supporting schools, colleges and organisations to strengthen belonging, wellbeing, inclusion and emotionally sustainable practice through training, consultancy, supervision and systems change.",
	formColors: { background: "#9cd2df", color: "#000000" },
	email: "",
	phoneNumber: "",
	name: "Healing Young Hearts",
	openingTimes: {
		'Sunday': 'Closed',
		'Monday': '8:00 am - 7:00 pm',
		'Tuesday': '8:00 am - 7:00 pm',
		'Wednesday': '8:00 am - 7:00 pm',
		'Thursday': '8:00 am - 7:00 pm',
		'Friday': '8:00 am - 7:00 pm',
	}
}

export default function HomePage () {
	const router = useRouter();

	return (<>
		<Header />

		<Hero 
			name={websiteConfig.name}
			description={websiteConfig.heroDescription} 
			style="version-2" backgroundOpacity={0.7}
			actions={[
				{
					label: "Book a Discovery Call",
					buttonStyle: "normal",
					type: "action",
					action: () => router.push("/book-consultation"),
				},
				{
					label: "Explore Services",
					buttonStyle: "secondary-color",
					type: "action",
					action: () => router.push("/about"),
				},
				{
					label: "Join Our Network",
					buttonStyle: "outline-accent-color",
					type: "action",
					action: () => router.push("/about"),
				},
			]}
		/>

		<CustomSection 
			textColor="black" bgColor="white"
			customSectionConfig={{
				title: "Introduction", type: "version-2",
				align: "left", image: "./images/image6.png"
			}}
		>
			<div className="text-sm full pd-05 line-height-17">
				I believe healing, growth and learning happen in relationships.
			</div>
			<div className="text-sm full pd-05 line-height-17">
				My work supports schools, colleges and organisations to develop compassionate, evidence-informed and relational approaches that help children, young people and adults feel safe, connected and able to thrive.
			</div>
			<div className="text-sm full pd-05 line-height-17">
				Grounded in neuroscience, belonging and trauma-informed practice, I help organisations move beyond awareness towards meaningful and sustainable implementation.
			</div>
			<Spacing />
		</CustomSection>

		<CustomSection 
			textColor="black" bgColor="accent-color-30"
			customSectionConfig={{
				title: "Key Focus Areas", type: "version-1",
				align: "left"
			}}
		>
			<div className="text-s full mt-1 line-height-15">Trauma-Informed Practice</div>
			<div className="text-s full mt-1 line-height-15">Belonging & Inclusion</div>
			<div className="text-s full mt-1 line-height-15">Staff Wellbeing</div>
			<div className="text-s full mt-1 line-height-15">Relational Leadership</div>
			<div className="text-s full mt-1 line-height-15">Mental Health & Emotional Safety</div>
			<div className="text-s full mt-1 line-height-15">Neurodiversity & Inclusion</div>
			<div className="text-s full mt-1 line-height-15">Whole-System Change</div>
			<div className="text-s full mt-1 line-height-15">Reflective Practice & Supervision</div>
		</CustomSection>

		<CustomSection 
			textColor="black" bgColor="accent-color-10"
			customSectionConfig={{
				title: "Join the Healing Young Hearts Community", type: "version-1",
				align: "left"
			}}
		>
			<div className="text-sm pd-05 full line-height-15 mb-1">
				Sign up to receive reflective, evidence-informed insights on trauma-informed practice, belonging, relational leadership, staff wellbeing and emotionally sustainable cultures in education.
			</div>
			<div className="text-sm bold-600 full pd-1">I'll occasionally share:</div>
			<ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
				<li className='text-sm pd-1' style={{ display: "list-item" }}>Articles and reflections</li>
				<li className='text-sm pd-1' style={{ display: "list-item" }}>Training and event updates</li>
				<li className='text-sm pd-1' style={{ display: "list-item" }}>Research-informed insights</li>
				<li className='text-sm pd-1' style={{ display: "list-item" }}>Recommended resources and reading</li>
				<li className='text-sm pd-1' style={{ display: "list-item" }}>Professional learning opportunities</li>
				<li className='text-sm pd-1' style={{ display: "list-item" }}>Updates from Healing Young Hearts</li>
			</ul>
			<div className="text-sm pd-05 full bold-600 line-height-15 mt-1">
				By subscribing, you agree to receive occasional emails from Healing Young Hearts. You can unsubscribe at any time. Please see the Privacy Policy for more information.
			</div>
		</CustomSection>

		{/* <CustomSection 
			textColor="black" bgColor="accent-color-30"
			customSectionConfig={{
				title: "Accreditation", type: "version-1",
				align: "left"
			}}
		>
			<div className="text-sm full pd-1 mt-1 line-height-17">
				Alongside independent consultancy, I am a licensed trainer with Trauma Informed Schools UK (TISUK), enabling access to nationally recognised training pathways where appropriate.
			</div>
		</CustomSection> */}

		<Footer />
	</>)
}
