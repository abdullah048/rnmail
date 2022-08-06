module.exports = {
	root: true,
	extends: ['prettier'],
	rules: {
		'eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
			}
		],
		'no-unused-vars': 'off',
		'no-shadow': 'off',
		'no-undef': 'off',
	}
};
