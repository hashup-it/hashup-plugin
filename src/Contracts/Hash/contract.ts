import devContract from './contractsDev.json';
import prodContract from './contractsProd.json';

export default process.env.REACT_APP_ENV === 'dev' ? devContract : prodContract;
