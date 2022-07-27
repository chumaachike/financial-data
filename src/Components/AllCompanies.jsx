import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Company from './Company';
import { getSpecificCompany, getAllCompanies } from '../redux/Allcompanies/Allcompanies';
import './allcompanies.css';

function AllCompanies() {
  let renderedItem = '';
  const dispatch = useDispatch();
  const [item, setItem] = useState();
  const allCompanies = useSelector((state) => state.AllCompanies);
  const exchange = useSelector((state) => state.Exchange);
  useEffect(() => {
    dispatch(getAllCompanies(exchange));
  }, []);
  if (allCompanies === undefined || allCompanies.length === 0) {
    renderedItem = (
      <p>
        Loading..
      </p>
    );
  } else {
    renderedItem = allCompanies.map(
      (company) => (
        <Company
          key={uuid()}
          symbol={company.symbol}
          name={company.name}
        />
      ),
    );
  }
  const handleChange = (event) => {
    setItem(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getSpecificCompany(item.toUpperCase()));
  };
  return (
    <>
      <h1>All Companies</h1>
      <NavLink to="/">
        Back
      </NavLink>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for particular stock in exchange" onChange={handleChange} />
      </form>
      <div className="allcompanies">
        {renderedItem}
      </div>
    </>
  );
}

export default AllCompanies;
