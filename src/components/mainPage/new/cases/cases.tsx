import { FC } from 'react';
import type { CasesInfoListItemType } from '@/types/Cases';
import CasesInfoList from './components/list-info/Index';

import style from '@/styles/css/mainPage/new/cases.module.css';

const listInfo: Array<CasesInfoListItemType> = [
	{
		count: '240',
		text: 'More reviews on otzovik sites',
	},
	{
		count: '4,9/5',
		text: 'NPS rating of our clients',
	}
];

const Cases: FC = () => {
	return (
		<div className={style.cases}>
			<div className={style.casesContainer}>
				<p className={style.casesSubTitle}>
					Customer reviews
				</p>

				<h2 className={style.casesTitle}>
					<span>We value</span> our reputation
				</h2>

				<CasesInfoList
					listInfo={listInfo}
				/>
			</div>
		</div>
	)
};

export default Cases;
