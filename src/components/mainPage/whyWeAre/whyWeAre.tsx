// !TEMPORARY DEACTIVATED

import style from '@/styles/css/services/whyWeAre.module.css';
import Image from 'next/image';
import ButtonArrowBlue from '../../../../public/images/mainPage/button-arrow-blue.svg';
import ServiceIcon from '../../../../public/images/mainPage/houseOrange-icon.svg';
import PlayIcon from '../../../../public/images/mainPage/whyWeAre/play-icon.svg';
import BgImage from '../../../../public/images/mainPage/whyWeAre/bg-image.svg';
import { useState } from 'react';

const WhyWeAre = () => {
	const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

	return (
		<section>
			<div className={`block-container ${style.container}`}>
				<div className={style.text}>
					<h4>почему мы</h4>
					<h2>Испытайте лучший сервис вместе с нами</h2>
					<div className={style.points}>
						<div>
							<Image src={ServiceIcon} alt='Логистика от А до Я' />
							<div className='description'>
								<h3>Логистика от А до Я</h3>
								<p>
									Делаем переезды удобными и быстрыми <br />с нашей опытной и
									надежной командой.
								</p>
							</div>
						</div>
						<div>
							<Image src={ServiceIcon} alt='Логистика от А до Я' />
							<div className='description'>
								<h3>4.9/5 звездный рейтинг</h3>
								<p>
									Наша компания стабильно получает высокие <br />
									оценки удовлетворенности клиентов.
								</p>
							</div>
						</div>
					</div>
					<div className={style.buttons}>
						<button className={`${style.main} main`}>
							<p>Get a quote</p>
							<Image src={ButtonArrowBlue} alt='' />
						</button>
						<button className='add'>Calculate cost</button>
					</div>
					<div className={style.section_background} />
				</div>
				<div className={style.video} onClick={() => setIsModalOpened(true)}>
					<Image src={BgImage} alt='' />
					<div>
						<Image src={PlayIcon} alt='Play' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyWeAre;
