import dynamic from 'next/dynamic';

export const DynamicMap = dynamic(() => import('./map'), {
	ssr: false,
});

export const DynamicWhMap = dynamic(() => import('../contacts/dynamicWarehousesMap'), {
	ssr: false,
});
