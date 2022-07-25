import React from 'react';
import PropTypes from 'prop-types';
import './companylist.css';

function DetailCard({
  symbol,
  reportedCurrency,
  revenue,
  grossProfit,
  dateAccepted,
  calendarYear,
  costOfRevenue,
  interestIncome,
}) {
  return (
    <div className="details-card">
      <h3>
        {calendarYear}
        {' '}
        Details
      </h3>
      <div className="details-element">
        <p>Symbol:</p>
        <p>{symbol}</p>
      </div>
      <div className="details-element">
        <p>Reported Currency:</p>
        <p>{reportedCurrency}</p>
      </div>
      <div className="details-element">
        <p>Revenue:</p>
        <p>{revenue}</p>
      </div>
      <div className="details-element">
        <p>Gross Profit:</p>
        <p>{grossProfit}</p>
      </div>
      <div className="details-element">
        <p>Date Accepted:</p>
        <p>{dateAccepted}</p>
      </div>
      <div className="details-element">
        <p>Cost of Revenue:</p>
        <p>{costOfRevenue}</p>
      </div>
      <div className="details-element">
        <p>Interest Icome:</p>
        <p>{interestIncome}</p>
      </div>
    </div>
  );
}

export default DetailCard;

DetailCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  reportedCurrency: PropTypes.string.isRequired,
  revenue: PropTypes.number.isRequired,
  grossProfit: PropTypes.number.isRequired,
  dateAccepted: PropTypes.string.isRequired,
  calendarYear: PropTypes.string.isRequired,
  costOfRevenue: PropTypes.number.isRequired,
  interestIncome: PropTypes.number.isRequired,
};
