import { FC } from 'react';
import type { OurServicesProposalListType } from '@/types/OurServices';

import style from "@/styles/css/mainPage/ourServices.module.css";

const OurServicesProposalList: FC<OurServicesProposalListType> = ({ proposal }) => {
	return (
		<ul className={style.ourServicesProposalList}>
			{proposal.map(item => (
				<li
					key={item}
					className={style.ourServicesProposalListItem}
				>
					{ item }
				</li>
			))}
		</ul>
	);
};

export default OurServicesProposalList;
