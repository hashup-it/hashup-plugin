const dev = {
	hashAddress: '0xecE74A8ca5c1eA2037a36EA54B69A256803FD6ea',
	igoAddress: '0xaF03BaA7094908817D052F78aa790A7ea376Da12',
	nicknameAddress: '0x81732cceC32d7f99c1babd4bDC56bc8fe59670e3',
	gamerProfileAddress: '0x4285683cdE52d8F5771Dc876112eaeA1a3Cf026D',
};

const prod = {
	hashAddress: '0x2ce9DAaaecF41914504d60Ea9c7C8dF1dC44BA9f',
	igoAddress: '0xaF03BaA7094908817D052F78aa790A7ea376Da12',
	nicknameAddress: '0xae07D165dE52A1d74171beC437f632fC102d1961',
	gamerProfileAddress: '0x4a55A36036fD8b2164d77A5AcDf74709E9270583',
};

export const envVariables = process.env.REACT_APP_ENV === 'dev' ? dev : prod;