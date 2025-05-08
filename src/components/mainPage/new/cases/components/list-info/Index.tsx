import { FC } from 'react';
import type { CasesInfoListType } from '@/types/Cases';

import style from '@/styles/css/mainPage/new/cases.module.css';

const CasesInfoList: FC<CasesInfoListType> = ({ listInfo }) => {
	return (
		<ul className={style.casesInfoList}>
			{listInfo.map(item => (
				<li
					key={item.count}
					className={style.casesInfoListItem}
				>
					<div className={style.casesInfoListItemCount}>
						{ item.count }
					</div>

					<p className={style.casesInfoListItemText}>
						{ item.text }
					</p>
				</li>
			))}
		</ul>
	);
};

export default CasesInfoList;
