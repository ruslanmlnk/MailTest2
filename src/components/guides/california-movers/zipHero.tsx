import React, { FC } from 'react';

import style from '@/styles/css/guides/routesHero.module.css';
import { parseMarkdown } from '../seoCost';

export interface IZipCodeHero {
	zipCode: string;
	title: string;
	description: string;
}

const ZipHero: FC<{ store: IZipCodeHero }> = ({ store }) => {
	return (
		<section className={style.section}>
			<div className={`block-container ${style.container}`}>
				<div className={style.title}>
					<div className={style.topbar}>
						<div>
							<p>{store.zipCode}</p>
						</div>
					</div>
					<h1>{store.title}</h1>
					<div className={style.description} dangerouslySetInnerHTML={{ 
						__html: parseMarkdown(store.description)
					}}/>
				</div>
			</div>
		</section>
	);
};

export default ZipHero;
