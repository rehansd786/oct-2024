import * as dataApi from './dataApi';

const URL = '/items';

export const getCardData = () => {
    return dataApi.getData(URL);
}