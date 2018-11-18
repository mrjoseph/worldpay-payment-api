import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import './breadcrumb.scss';

const Breadcrumb = ({ breadcrumb }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      {Object.keys(breadcrumb).map((item) => {
        const text = breadcrumb[item];
        return (
          <li key={text} className="breadcrumb-item">
            <Link to={text === 'Checkout' ? '/' : text.toLowerCase()}>
              <button type="button" className="button">
                {text}
              </button>
            </Link>
          </li>
        );
      })}
    </ol>
  </nav>
);

Breadcrumb.propTypes = {
  breadcrumb: PropTypes.objectOf(
    PropTypes.string,
  ).isRequired,
};

export default Breadcrumb;
