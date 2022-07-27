/* eslint-disable default-param-last */
const GET = 'financialdata/comapnydetails/GET_EXCHANGE';
export const setExchange = (exchange) => async (dispatch) => {
  dispatch({ type: GET, payload: exchange });
};

const exchangeReducer = (state = '', action) => {
  switch (action.type) {
    case GET:
      return action.payload;
    default:
      return state;
  }
};

export default exchangeReducer;
