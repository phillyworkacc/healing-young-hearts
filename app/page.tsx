'use client'
import CustomSection from "@/components/CustomSection/CustomSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header"
import Hero from "@/components/Hero/Hero"
import Spacing from "@/components/Spacing/Spacing";
import { useRouter } from "next/navigation";

export const websiteConfig = {
	headerBackgroundColor: "#ffffff",
	headerTextColor: "#000",
	accentColor: "#047B6D",
	heroDescription: "Evidence-led training and consultancy rooted in neuroscience, relationships, and belonging.",
	formColors: { background: "#67c2b7", color: "#000000" },
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
			name={"Trauma-Informed Practice That Transforms Systems, Not Just Behaviour."}
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
					buttonStyle: "outline-accent-color",
					type: "action",
					action: () => router.push("/about"),
				},
			]}
		/>

		<CustomSection 
			textColor="black" bgColor="accent-color-70"
			customSectionConfig={{
				title: "Introduction", type: "version-1",
				align: "left"
			}}
		>
			<div className="text-sm full pd-1 mt-1 line-height-17">
				Healing Young Hearts Ltd supports schools, colleges, and organisations to embed trauma-informed, relational practice that improves behaviour, wellbeing, and learning outcomes. Our work is grounded in neuroscience and aligned with the principles of the Substance Abuse and Mental Health Services Administration (SAMHSA), ensuring a whole-system approach that leads to meaningful, sustainable change.
			</div>
			<Spacing />
		</CustomSection>

		<CustomSection 
			textColor="black" bgColor="accent-color-30"
			customSectionConfig={{
				title: "Accreditation", type: "version-1",
				align: "left"
			}}
		>
			<div className="text-sm full pd-1 mt-1 line-height-17">
				Alongside independent consultancy, I am a licensed trainer with Trauma Informed Schools UK (TISUK), enabling access to nationally recognised training pathways where appropriate.
			</div>
		</CustomSection>

		<Footer />
	</>)
}
