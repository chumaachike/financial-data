import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Company from './Company';
import { getAllCompanies } from '../redux/Allcompanies/Allcompanies';
import './companylist.css';

function CompanyListContainer() {
  const allCompanies = useSelector((state) => state.AllCompanies);
  const dispatch = useDispatch();
  useEffect(() => {
    if (allCompanies === undefined || allCompanies.length === 0) {
      dispatch(getAllCompanies);
    }
  }, []);
  const renderedItems = allCompanies.map(
    (company) => (
      <Company
        name={company}
        key={uuid()}
      />
    ),
  );
  return (
    <div>
      <h1 className="header">Welcome to Finance times</h1>
      <p className="message">Please click on a Stock to a detailed income statement for over 5 years</p>
      <p>NB: for the free tier version of this app only US stocks income statement can be viewed</p>
      <div className="stocks">
        {renderedItems}
      </div>
    </div>
  );
}

export default CompanyListContainer;
