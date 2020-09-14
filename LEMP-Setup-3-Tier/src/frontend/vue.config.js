module.exports = {
	devServer: {
		disableHostCheck: true,
		sockHost: 'frontend.dev',
		watchOptions: {
			ignored: /node_modules/,
			aggregateTimeout: 300,
			poll: 1000,
		}
	},
};