import axios from 'axios';

export const getCompanies = async () => {
  const companies = await axios({
    method: 'GET',
    url: 'https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists',
    params: {
      apikey: 'da7623cfbe7a9dd8b3739829cc5849cb',
    },

  }).then((response) => response.data)
    .catch((err) => err.message);
  return companies;
};

export const getCompanyDetails = async (name) => {
  const details = await axios({
    method: 'GET',
    url: `https://financialmodelingprep.com/api/v3/income-statement/${name}`,
    params: {
      limit: '120',
      apikey: 'da7623cfbe7a9dd8b3739829cc5849cb',
    },

  }).then((response) => response.data)
    .catch((err) => err.response.data);
  return details;
};
