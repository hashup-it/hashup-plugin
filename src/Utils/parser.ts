/**
 * value                decimal places
 * [0, 0.0009]          full
 * [0.001, 0.999]       2
 * [1.00, 999.99]       2
 * [1000.0, 99999.9]    1
 * [100000, +inf]       0
 * @param rawBalance input string
 */
export const prettyTrimBalance = (rawBalance: string) => {
	const numericApproximation = parseFloat(rawBalance);

	const decimalSeparatorIndex = rawBalance.indexOf('.') !== -1 ? rawBalance.indexOf('.') : rawBalance.length;
	let offset = rawBalance.length;

	if (numericApproximation >= 0 && numericApproximation < 0.001) {
		offset = rawBalance.length;
	}
	if (numericApproximation >= 0.001 && numericApproximation < 1) {
		offset = decimalSeparatorIndex + 3;
	}
	if (numericApproximation >= 1 && numericApproximation < 1000) {
		offset = decimalSeparatorIndex + 3;
	}
	if (numericApproximation >= 1000 && numericApproximation < 100000) {
		offset = decimalSeparatorIndex + 2;
	}
	if (numericApproximation >= 100000) {
		offset = decimalSeparatorIndex;
	}

	return rawBalance.substring(0, offset);
};

/**
 * Does not parse strictly raw balance as the precision would be off
 * when decimal places > 4 etc.
 * @dev trimmedBalance approximate balance value
 * @param rawBalance definite balance value
 */
export const prettyPrintBalance = (rawBalance: string) => {
	if (isNaN(parseFloat(rawBalance))) {
		return '';
	}

	const trimmedBalance = prettyTrimBalance(rawBalance);

	return parseFloat(trimmedBalance).toLocaleString('fullwide', { maximumSignificantDigits: 21 });
};

export const safeSimplifyBalance = (rawBalance: string) => {
	let result = rawBalance;

	if (Number(result) === 0) {
		return '0';
	}

	/** Remove zero-valued decimal points */
	if (getBalanceDecimals(result) === 1 && result[result.length - 1] === '0') {
		result = result.substring(0, result.length - 2);
	}

	// /** Remove leading zeros */
	// if ()
	// result = result.replace(/^0+/, '')

	return result;
};

export const getBalanceDecimals = (rawBalance: string) => {
	if (rawBalance.indexOf(',') === -1 && rawBalance.indexOf('.') === -1) {
		return 0;
	}

	const decimalSeparatorIndex = rawBalance.indexOf('.') === -1 ? rawBalance.indexOf(',') : rawBalance.indexOf('.');

	const decimals = rawBalance.substring(decimalSeparatorIndex + 1);
	return decimals.length;
};

export const safeParseBalance = (rawBalance: string) => safeSimplifyBalance(prettyTrimBalance(rawBalance));
