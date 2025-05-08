import { useEffect } from 'react';

const Marquiz = () => {
	useEffect(() => {
		(function (t, p) {
			window.Marquiz
				? window.Marquiz.add([t, p])
				: document.addEventListener('marquizLoaded', function () {
						window.Marquiz.add([t, p]);
				  });
		})('Button', {
			id: '650ad1222be6b60025dae176',
			buttonText: 'Пройти тест',
			bgColor: '#e9602c',
			textColor: '#ffffff',
			rounded: true,
			shadow: 'rgba(233, 96, 44, 0.5)',
			blicked: true,
		});
	}, []);

	return <div data-marquiz-id='650ad1222be6b60025dae176'></div>;
};

export default Marquiz;
