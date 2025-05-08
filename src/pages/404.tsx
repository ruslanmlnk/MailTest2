import Head from 'next/head';
import style from '../styles/css/404.module.css';
import Notfound from '@/components/notfound';

const Custom404 = () => {
	return (
		<>
			<Head>
				<title>Page not found - Moving Company | Star Vanlines</title>
				<meta
					name='description'
					content='Welcome to Star Vanlines! We are a reliable and experienced moving company committed to providing exceptional service for your relocation needs.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={style.main}>
				<Notfound />
			</div>
		</>
	);
};

export default Custom404;
