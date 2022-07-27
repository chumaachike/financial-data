/* eslint-disable default-param-last */
import { getCompanies } from '../../api/stockapi';

const GET = 'financialdata/allcompanies/GET_ALL_COMPANIES';
const GETSPEC = 'financialdata/allcompanies/GET_SPECIFIC_COMPANY';

export const getAllCompanies = (exchange) => async (dispatch) => {
  const data = await getCompanies(exchange);
  dispatch({ type: GET, payload: data });
};

export const getSpecificCompany = (symbol) => async (dispatch) => {
  dispatch({ type: GETSPEC, payload: symbol });
};

const allCompaniesReducer = (state = [], action) => {
  switch (action.type) {
    case GET:
      return action.payload;
    case GETSPEC:
      return state.filter((item) => item.symbol === action.payload);
    default:
      return state;
  }
};

export default allCompaniesReducer;
