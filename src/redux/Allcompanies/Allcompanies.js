/* eslint-disable default-param-last */
import { getCompanies } from '../../api/stockapi';

const GET = 'financialdata/allcompanies/GET_ALL_COMPANIES';

export const getAllCompanies = async (dispatch) => {
  const data = await getCompanies();
  dispatch({ type: GET, payload: data });
};

const allCompaniesReducer = (state = [], action) => {
  switch (action.type) {
    case GET:
      return action.payload;
    default:
      return state;
  }
};

export default allCompaniesReducer;
