import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

import ChartWrapper from './ChartWrapper';

const Metascore = ({ scores }) => {
  // calculate the number of positive, negative, mixed reviews
  const scoresCategory = { positive: 0, mixed: 0, negative: 0 };
  scores.forEach((score) => {
    if (score > 60) {
      scoresCategory.positive += 1;
    } else if (score > 39) {
      scoresCategory.mixed += 1;
    } else {
      scoresCategory.negative += 1;
    }
  });

  // determine which review type has the most so we can normalize bar lengths
  const maxReviews = _.max(scoresCategory);

  // normalize the lengths of the ChartWrapper bars
  const normalizeLengths = { ...scoresCategory };
  const keys = Object.keys(normalizeLengths);
  for (let i = 0; i < keys.length; i += 1) {
    normalizeLengths[keys[i]] /= maxReviews;
  }

  // calculate the average total score
  const avgScore = (scores.reduce((acc, el) => acc + el) / scores.length).toFixed(0);

  // assign the average total score to a descriptor
  let avgRating;
  if (avgScore > 60) {
    avgRating = 'positive';
  } else if (avgScore > 39) {
    avgRating = 'mixed';
  } else {
    avgRating = 'negative';
  }

  return (
    <div className="metascore_charts">
      <div className="title title_bump pad_btm1 oswald">
        <div className="section_title">
          <a href="/">Metascore</a>
        </div>
      </div>
      <div className="distribution">
        <div className="score fl">
          <a href="/" className="">
            <div className={`metascore_w title larger movie ${avgRating}`}>{avgScore}</div>
          </a>
        </div>
        <div className="charts fl">
          <ChartWrapper type="positive" length={normalizeLengths.positive} reviews={scoresCategory.positive} />
          <ChartWrapper type="mixed" length={normalizeLengths.mixed} reviews={scoresCategory.mixed} />
          <ChartWrapper type="negative" length={normalizeLengths.negative} reviews={scoresCategory.negative} />
        </div>
        <div className="clr" />
      </div>
    </div>
  );
};

export default Metascore;

Metascore.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.number).isRequired,
};
