import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import AllCompanies from './Allcompanies/Allcompanies';
import CompanyDetails from './CompanyDetails/CompanyDetail';

const store = configureStore({
  reducer: {
    AllCompanies, CompanyDetails,
  },
  middleware: [thunk],
});

export default store;
