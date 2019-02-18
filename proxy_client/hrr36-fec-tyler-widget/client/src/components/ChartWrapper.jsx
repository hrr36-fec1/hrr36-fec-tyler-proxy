import React from 'react';
import PropTypes from 'prop-types';

const ChartWrapper = ({ length, type, reviews }) => {
  const barLength = {
    width: `${100 * length}%`,
  };

  return (
    <div className="chart_wrapper">
      <div className="chart_bg" />
      <div className={`chart ${type}`} style={barLength}>
        <div className={`bar ${type}`} />
        <div className="text oswald">
          <div className="fl">
            {`${type}:`}
          </div>
          <div className="fr">{reviews}</div>
          <div className="clr" />
        </div>
      </div>
    </div>
  );
};

export default ChartWrapper;

ChartWrapper.propTypes = {
  length: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
