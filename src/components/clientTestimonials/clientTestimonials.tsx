import clsx from "clsx";
import dynamic from "next/dynamic";
import styles from "./clientTestimonials.module.scss";

export interface TestimonialItem {
	id: number;
	widget: string;
	widgetMobile: string;
}
interface Testimonials {
	TestimonialItems: TestimonialItem[];
	className?: string;
}

export const TrustBoxComponent = dynamic(() => import("../TrustBox"), {
	ssr: false,
});

export const ClientTestimonials = ({
	TestimonialItems,
	className,
}: Testimonials) => {

	const extractTrustpilotData = (widget: string) => {
		const templateIdMatch = widget.match(/data-template-id="([^"]+)"/);
		const businessUnitIdMatch = widget.match(/data-businessunit-id="([^"]+)"/);

		return {
			templateId: templateIdMatch ? templateIdMatch[1] : null,
			businessUnitId: businessUnitIdMatch ? businessUnitIdMatch[1] : null,
		};
	};

	return (
		<section className={clsx(styles.section, className)}>
			<div className={styles.container}>
				<div className={styles.desktop}>
					<div className={styles.cards}>
						{TestimonialItems.map((item, i) => {
							const { templateId, businessUnitId } = extractTrustpilotData(
								item.widget,
							);

							return (
								<div key={i} className={styles.card}>
									{templateId && businessUnitId ? (
										<TrustBoxComponent
											templateId={templateId}
											businessUnitId={businessUnitId}
										/>
									) : (
										<div dangerouslySetInnerHTML={{ __html: item.widget }}></div>
									)}
								</div>
							);
						})}
					</div>
				</div>
				<div className={styles.mobile}>
					<div className={styles.cards}>
						{TestimonialItems.map((item, i) => {
							const { templateId, businessUnitId } = extractTrustpilotData(
								item.widgetMobile,
							);

							return (
								<div key={`mobile-${item.id}`} className={styles.card}>
									{templateId && businessUnitId ? (
										<TrustBoxComponent
											templateId={templateId}
											businessUnitId={businessUnitId}
										/>
									) : (
										<div
											dangerouslySetInnerHTML={{ __html: item.widgetMobile }}
										></div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
export default ClientTestimonials;
