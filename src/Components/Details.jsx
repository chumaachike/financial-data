import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import DetailCard from './DetailCard';
import './detail.css';

function Details() {
  let renderedItem = '';
  const companyDetails = useSelector((state) => state.CompanyDetails);
  if (companyDetails === undefined || companyDetails.length === 0) {
    renderedItem = (
      <tr>
        <td>Loading</td>
        <td>...</td>
      </tr>
    );
  } else {
    renderedItem = Object.keys(companyDetails[0]).map(
      (item) => (
        <DetailCard
          key={uuid()}
          id={item}
          value={companyDetails[0][item]}
        />
      ),
    );
  }

  return (
    <>
      <h1>Details</h1>
      <NavLink to="/allCompanies">Back</NavLink>
      <table>
        <tbody>
          {renderedItem}
        </tbody>
      </table>
    </>

  );
}

export default Details;
