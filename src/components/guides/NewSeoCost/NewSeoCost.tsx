import { marked } from "marked";
import React, { FC, useState } from "react";

import { ReadMore } from "@/lib/ReadMore";

import style from "./NewSeoCost.module.scss";

marked.use({
	mangle: false,
	headerIds: false,
});

export interface ISEOCost {
	id: number;
	title: string;
	description?: string;
	tab: {
		tabContent: string;
		tabTitle: string;
	}[];
}

export const LongDistanceSeoCost: ISEOCost = {
	title: "Star Van Lines is \nthe best company for long distance moves",
	description:
		"We have a great reputation, top long distance movers, and lots of experience of full services moves. Star Van Lines is the professional moving company for long distance moves, with years of experience. When time to move comes and you are planning to relocate, our team of long-distance moving experts is here to provide you with a seamless and hassle-free moving process. We can help with your cost effective move, whether it's to a new city or anywhere else in the country. We have the skills and knowledge to handle everything and we are one of the best United States based long distance moving companies.",
	id: 1,
	tab: [
		{
			tabTitle: "Preparation",
			tabContent:
				"Our dedicated team understands the challenges and complexities involved in moving across a country. We can help with everything needed for a smooth move to your new place, including logistics, paperwork, important documents and coordination. We handle everything from packing to unloading, providing moving supplies so you can concentrate on getting comfortable in your new home with friends and family.\n\nWhen you choose our long-distance moving services, you can expect professionalism, reliability, and efficiency. Our team is trained to handle various items, including fragile and valuable possessions, as well as large and heavy lifting furniture. We use good materials (boxes, blankets, bubble wrap, shrink wrap, tape) and methods to keep your things safe and secure during the trip.",
		},
		{
			tabTitle: "Services we provide",
			tabContent:
				"We understand that every move is unique, and we tailor our services to meet your specific needs and requirements. We can help with packing, storage, and delicate items. We want to simplify your move. This way, you can focus on the excitement of starting a new chapter in your life.\n\nWe can help with interstate moves and offer extra services to make your relocation easier. These include vehicle transportation, pet relocation, and assistance with utility transfers and address changes. We strive to be your one-stop solution for all your moving needs.",
		},
		{
			tabTitle: "Customer service",
			tabContent:
				"At every step of the way, our team is committed to providing exceptional customer service. We can help with any questions or worries you have and we'll keep you updated during the move. Our goal is to exceed your expectations and ensure your complete satisfaction.",
		},
		{
			tabTitle: "Our stuff",
			tabContent:
				"If you're moving far away, rely on our skilled team to take care of everything for your move. With our expertise and dedication, we will make your move a stress-free and successful experience. Contact us today to discuss your moving needs and let us take care of the rest.\n\nOne of the reasons why Star Van Lines stands out from the competition is our commitment to customer satisfaction. Our staff will help you with your move and answer any questions you have. We are friendly and knowledgeable.",
		},
		{
			tabTitle: "Licenses and insurances",
			tabContent:
				"We have obtained all the necessary licenses and insurance needed to legally operate in our industry. This includes licenses and permits needed for our business, depending on its nature.\n\nAdditionally, we have also made sure to have the appropriate insurance coverage in place. General liability insurance covers claims for bodily injury or property damage that may happen while we are working. We have insurance for workers' compensation, which covers injuries or illnesses employees may get while working. Partner insurance companies can provide additional or special insurances.\n\nWe are legally and responsibly licensed and insured to provide peace of mind to our customers for household goods. It also ensures that we protect ourselves well in case of unexpected accidents or incidents.",
		},
		{
			tabTitle: "Moving quotes",
			tabContent:
				"We provide free moving quotes. This free quote allow you to know the exact cost of a long-distance move. With our quotes, you won't have any unexpected charges on moving day. Moving can be stressful, but they offer extra help and support at every stage to make it easier for you.",
		},
	],
};

export const LocalMovingSeoCost: ISEOCost = {
	title: "Short distance moves by Star Van Lines",
	description:
		"We have a great reputation, top local movers, and lots of experience of full services moves. Star Van Lines is the professional moving company for local moves, with years of experience. When time to move comes and you are planning to relocate, our team of local moving experts is here to provide you with a seamless and hassle-free moving process. We can help with your cost effective move, whether it's to a new city or anywhere else in the country. We have the skills and knowledge to handle everything and we are one of the best United States based local moving companies.",
	id: 1,
	tab: [
		{
			tabTitle: "Preparation",
			tabContent:
				"Moving can often be a chaotic and overwhelming process. DIY move is not a good option when you have many bulky or heavy items and rental trucks can cost more than hiring professional movers.\n\nHowever, with the assistance of local movers in your area, you can ensure a smooth and hassle-free experience. Being one of the top professional moving companies in United States we are well-equipped to handle any type of move, whether it is a small apartment, a spacious house, an office space, or even a cluttered garage. \n\nHire movers is good idea because you can know the total cost beforehand. This means that you can have a clear understanding of the costs involved in the moving process, allowing you to plan your budget accordingly. By providing you with a transparent pricing structure, local movers ensure that there are no surprises or hidden fees along the way and you always know what expect to pay., including logistics, paperwork, important documents and coordination. We handle everything from packing to unloading, providing moving supplies so you can concentrate on getting comfortable in your new home with friends and family.\n\nWhen you choose our long-distance moving services, you can expect professionalism, reliability, and efficiency. Our team is trained to handle various items, including fragile and valuable possessions, as well as large and heavy lifting furniture. We use good materials (boxes, blankets, bubble wrap, shrink wrap, tape) and methods to keep your things safe and secure during the trip.",
		},
		{
			tabTitle: "Moving budget",
			tabContent:
				"You can always request a free quote or use our moving cost calculator to check a possible price. Average cost for local moves start from $130 per hour for 2 movers and a truck.\n\nSave moving budget and make your move cost effective by packing your things in boxes yourself. If you pack yourself, you won't have to pay for professional packers or buy pre-packed boxes, saving money. This gives you more control over packing and ensures you pack your things to your liking on moving day.\n\nThe price includes packing materials (except boxes)and packing services. We use different methods to keep your household goods safe, like taking furniture apart and using special packing materials.",
		},
		{
			tabTitle: "Moving process",
			tabContent:
				"When packing your own boxes, you have the flexibility to choose the size and type of boxes that best suit your needs. You can choose sturdy boxes for fragile things or spacious boxes for large things. Use the right boxes to reduce damage and save money on replacing items when moving.\n\nAdditionally, packing your own boxes gives you the opportunity to declutter and organize your belongings before the move. You can sort through your items and decide what you truly need to take with you to your new home.\n\nThis saves money on packing supplies and services. It also reduces the number of items to transport. This can potentially save money on moving services.\n\nThe local movers will arrive at your location promptly on the scheduled moving date and time. This will happen after you have agreed on the price and hourly rate. They understand the importance of punctuality and strive to provide efficient and reliable service with all necessary moving supplies. We will safely pack and protect your belongings during transportation, using our expertise.",
		},
		{
			tabTitle: "Additional services",
			tabContent:
				"Moving heavy furniture, fragile items, and valuable possessions can be a daunting task. However, local movers are well-trained in handling such items with utmost care. Our company can safely move your belongings without damage in moving truck.\n\nThe price includes packing materials (except boxes)and packing services. We use different methods to keep your household goods safe, like taking furniture apart and using special packing materials.\n\nIn addition to their expertise in residential moves, local movers are also well-equipped to handle office relocations. We understand the importance of minimizing downtime and disruptions to your business operations. We can move your office stuff quickly and smoothly so you can get back to work without any delay.",
		},
		{
			tabTitle: "Moving experts",
			tabContent:
				"Overall, local movers provide a comprehensive range of services to cater to your specific moving needs. Our expertise ensures a stress-free move, whether you're moving nearby or to another part of town. By entrusting your move to these experts, you can focus on settling into your new space and starting the next chapter of your life.\n\nUpon arrival at the designated location, our team will carefully unpack the cargo and proceed with the setup process. We understand that proper installation is crucial to ensure the functionality and usability of the items. Our skilled technicians will unpack and set up the cargo carefully to ensure it works perfectly.\n\nThroughout the entire cycle of work, our company adheres to the highest standards of professionalism and quality. We have built a reputation for delivering exceptional service and maintaining the integrity of our clients' cargo. We have over 10 years of experience and have improved our methods to provide a reliable service.",
		},
		{
			tabTitle: "Storage services",
			tabContent:
				"Our moving company offers various additional services such storage units, heavy lifting furniture, piano moving. These include assembling and packaging the cargo. We also deliver it to your desired location. Additionally, we unpack the cargo and set it up in a new room.\n\nFocusing on details makes moving into your new place easier. It eliminates the worry of moving furniture and unpacking boxes.\n\nDon't forget to invite your friends and family after a stress-free local move with Star Van Lines!, you won't have any unexpected charges on moving day. Moving can be stressful, but they offer extra help and support at every stage to make it easier for you.",
		},
	],
};

export const StorageSEOCost: ISEOCost = {
	title: "Storage services provided by Star Van Lines.",
	description:
		"We have a great reputation, top local movers, and lots of experience of full services moves. Star Van Lines is the professional moving company for local moves, with years of experience. When time to move comes and you are planning to relocate, our team of local moving experts is here to provide you with a seamless and hassle-free moving process. We can help with your cost effective move, whether it's to a new city or anywhere else in the country. We have the skills and knowledge to handle everything and we are one of the best United States based local moving companies.",
	id: 1,
	tab: [
		{
			tabTitle: "Preparation",
			tabContent:
				"We know it's important to offer trustworthy and safe moving and storage services to our customers at Star Van Lines. Our warehouse services are perfect for home renovations, downsizing, or decluttering. We cater to your specific needs for extra space.\n\nOur state-of-the-art facilities will keep your belongings safe and protected, providing you with peace of mind. Our storage units have advanced security systems, which include 24/7 surveillance cameras and secure access controls. We prioritize the safety of your items, so you can have peace of mind knowing that they are in good hands. Wood furniture, musical instruments , files and folders, boxes are in safety place!",
		},
		{
			tabTitle: "Options",
			tabContent:
				"Our storage services are not only secure but also convenient. We provide adaptable leasing choices, enabling you to select the period that fits your needs. Whether you need short-term storage for a few weeks or long-term storage for several months, we have you covered.\n\nOur staff will assist you in selecting the appropriate unit size for your belongings. This ensures that you only pay for the space that you require.\n\nWhen storing your items, we understand that accessibility is key. Our conveniently located storage places allow you to easily leave or collect your things whenever necessary. Our clean, climate controlled units are perfect for preserving the condition of your items, including antiques and electronics.",
		},
		{
			tabTitle: "Customer service",
			tabContent:
				"At Star Van Lines, we go above and beyond to provide exceptional customer service. Our committed team is always on standby to help you with any inquiries or issues you might encounter. We believe in open and transparent communication, ensuring that you are well-informed throughout the storage process.\n\nWe provide storage, packing, and moving services to make your transition smooth and easy. Our skilled movers will carefully pack and transport your belongings to our storage facility or your new place.",
		},
		{
			tabTitle: "Why choose us?",
			tabContent:
				"Moving can be complicated and take a lot of time. Sometimes, our customers need a temporary storage option for their things. We aim to ensure that our customers have a stress-free experience. This applies to situations where their new home is not ready yet, when they are downsizing, or for any other reason.\n\nFurthermore, we can seamlessly integrate our storage services with our long distance moving service or local moving service. Our team will move your things to our storage place, making sure they are packed, loaded, and unloaded carefully. We will move your belongings to your new home according to your request.\n\nontact our sales department for a free quote and storage offers. Reserve a climate controlled unit for the safety of your belongings.",
		},
	],
};

export const CommercialRelocationEOCost: ISEOCost = {
	title:
		"Commercial movers by Star Van Lines is the right choice and high level moving service for your business needs.",
	description:
		"We have a great reputation, top local movers, and lots of experience of full services moves. Star Van Lines is the professional moving company for local moves, with years of experience. When time to move comes and you are planning to relocate, our team of local moving experts is here to provide you with a seamless and hassle-free moving process. We can help with your cost effective move, whether it's to a new city or anywhere else in the country. We have the skills and knowledge to handle everything and we are one of the best United States based local moving companies.",
	id: 1,
	tab: [
		{
			tabTitle: "Preparation",
			tabContent:
				"Our team of professionals with years of experience understands the unique requirements of commercial moves and is dedicated to providing a seamless and stress-free experience for your business. With Star Van Lines, one of the most trusted US moving companies, you can be sure that your valuable assests are handled with utmost care and efficiency.\n\nAt Star Van Lines, we prioritize punctuality and reliability. We understand the importance of minimizing downtime and ensuring a smooth transition for your business operations. Our team works diligently to create a detailed moving plan, taking into account your timeline and requirements. We strive to complete your move efficiently, so you can resume business as usual in no time.",
		},
		{
			tabTitle: "Why choose us ?",
			tabContent:
				"No matter the size or complexity of your move, we have the expertise and resources to handle it with utmost care and professionalism. Trust us to make your next move a seamless and enjoyable experience.\n\nWith our state-of-the-art equipment and well-maintained vehicles, we guarantee the safe transportation of your equipment, furniture, and inventory. Our movers are trained in proper handling techniques and use specialized tools to ensure the protection of your valuable assets. We also offer secure storage solutions, should you require temporary or long-term storage for your business items",
		},
		{
			tabTitle: "What's included ?",
			tabContent:
				"Our services include packing and unpacking, loading and unloading, transportation, and even storage solutions. We have a team of skilled packers who will carefully wrap and secure your belongings to ensure their safety during transit. Our business movers are experienced in handling all types of items, from fragile and valuable possessions to bulky furniture and appliances.\n\nOur office movers can handle office, warehouse, or retail space relocations, both locally and long distance. We handle everything for your move, so you can concentrate on running your business.\n\nIn addition to our moving services, we also offer insurance options to provide you with peace of mind. Our comprehensive insurance coverage protects your belongings against any unforeseen circumstances, giving you added security throughout the moving process.",
		},
		{
			tabTitle: "Packing options",
			tabContent:
				"If you prefer to pack your own belongings, we can provide you with high-quality packing materials to ensure that your items are properly protected. Our moving team can also assist you in disassembling and reassembling furniture, saving you time and effort.\n\nWe provide a project manager for each business move who will handle with all your needs and requirements for your office move.",
		},
		{
			tabTitle: "Our mission",
			tabContent:
				"Customer satisfaction is at the heart of everything we do. Our friendly and professional stuff with tons of moving experience is always available to address any concerns or answer any questions you may have throughout the office relocation. We pride ourselves on delivering exceptional customer service with attention to details and building long-lasting relationships with our clients.\n\nFor commercial moves, trust the experts at Star Van Lines. We promise a smooth and easy experience for your business with our focus on quality and carefulness. Send a request for a free quote and get the the best offer for professional office move.",
		},
	],
};

const renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
	return `<a target="_blank" href="${href}">${text}</a>`;
};

export const parseMarkdown = (text: string) => {
	return marked.parse(text, { renderer });
};

const NewSeoCost = ({ costArray }: { costArray: ISEOCost }) => {
	const [currentTab, setCurrentTab] = useState<number>(0);
	const [hideBlocks, setHideBlocks] = useState<boolean>(false);

	const handleTabClick = (index: number) => {
		setCurrentTab(index);
		setHideBlocks(false);
	};
	return (
		<section>
			<div className={`${style.container}`}>
				<span className={`preTitle ${style.preTitle}`}>
					You may have been looking for
				</span>
				<h2>{costArray.title}</h2>
				<p className={style.ceo_description}>{costArray.description}</p>
				<div className={style.tabs}>
					{costArray.tab.map((item, index) => (
						<button
							className={`${style.tab} ${
								currentTab == index ? style.active : ""
							}`}
							onClick={() => handleTabClick(index)}
							key={index}
						>
							{item.tabTitle}
						</button>
					))}
				</div>

				{costArray.tab.map((item, index) => (
					<div key={index}>
						<div
							className={`${style.content} ${
								currentTab === index && !hideBlocks
									? style.visible
									: style.hidden
							}`}
						>
							<span className={style.card_title}>{item.tabTitle + "\n"}</span>
							<p style={{ marginTop: "15px" }}>{item.tabContent}</p>
						</div>
						<ReadMore
							title={item.tabTitle + "\n"}
							limit={138}
							className={`${style.mobileContent} ${
								currentTab === index && !hideBlocks
									? style.visible
									: style.hidden
							}`}
						>
							{item.tabContent}
						</ReadMore>
					</div>
				))}
			</div>
		</section>
	);
};

export default NewSeoCost;
