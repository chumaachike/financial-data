import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { NavLink } from 'react-router-dom';
import DetailCard from './DetailCard';

function Details() {
  let renderedItem = 'Loading';
  const companyDetails = useSelector((state) => state.CompanyDetails);
  if (companyDetails['Error Message']) {
    renderedItem = <p style={{ color: 'black' }}>{companyDetails['Error Message']}</p>;
  } else {
    renderedItem = companyDetails.map(
      (detail) => (
        <DetailCard
          key={uuid()}
          symbol={detail.symbol}
          reportedCurrency={detail.reportedCurrency}
          revenue={detail.revenue}
          grossProfit={detail.grossProfit}
          dateAccepted={detail.acceptedDate}
          calendarYear={detail.calendarYear}
          costOfRevenue={detail.costOfRevenue}
          interestIncome={detail.interestIncome}
        />
      ),
    );
  }
  return (
    <>
      <h1 className="header">Details</h1>
      <NavLink to="/" className="navlink">Click to go back to all stocks</NavLink>
      <div className="details">
        {renderedItem}
      </div>
    </>
  );
}

export default Details;
