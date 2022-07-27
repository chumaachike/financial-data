/* eslint-disable default-param-last */
import { getCompanyDetails } from '../../api/stockapi';

const GET = 'financialdata/comapnydetails/GET_COMPANY_DETAILS';

export const getDetails = (symbol) => async (dispatch) => {
  const data = await getCompanyDetails(symbol);
  dispatch({ type: GET, payload: data });
};

const detailsReducer = (state = [], action) => {
  switch (action.type) {
    case GET:
      return action.payload;
    default:
      return state;
  }
};

export default detailsReducer;
