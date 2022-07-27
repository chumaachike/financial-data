import React from 'react';
import PropTypes from 'prop-types';

function DetailCard({ id, value }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{value}</td>
    </tr>
  );
}

DetailCard.propTypes = {
  id: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

DetailCard.defaultProps = {
  id: '',
  value: '',

};

export default DetailCard;
