module.exports = {
	plugins: {
		'postcss-pxtorem': {
			rootValue: 16,
			unitPrecision: 5,
			propList: ['*'],
			replace: true,
			mediaQuery: false,
			selectorBlackList: [],
			minPixelValue: 0,
		},
	},
};
