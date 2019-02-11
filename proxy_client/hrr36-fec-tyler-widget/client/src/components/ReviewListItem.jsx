import React from 'react';
import PropTypes from 'prop-types';

const ReviewListItem = ({ review }) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const date = new Date(review.publishDate).toLocaleDateString('en-US', options);

  let reaction;
  if (review.score > 60) {
    reaction = 'positive';
  } else if (review.score > 39) {
    reaction = 'mixed';
  } else {
    reaction = 'negative';
  }

  return (
    <div className="review pad_top2 pad_btm2">
      <div className="head_wrap">
        <div className="score_wrap">
          <div className={`metascore_w header_size movie ${reaction} indiv`}>{review.score.toFixed(0)}</div>
        </div>
        <div className="pub_wrap title">
          <span className="source">
            <a href="/">{review.publication}</a>
          </span>
          <span className="dash"> &ndash; </span>
          <span className="author">
            <a href="/">{review.author}</a>
          </span>
          <div className="date pad_top_half">{date}</div>
        </div>
      </div>
      <div className="summary_wrap pad_top_half">
        <div className="summary">
          <a href="/" className="no_hover">{review.body}</a>
          <br />
          <a href="/" className="read_full">Read Full Review</a>
        </div>
      </div>
    </div>
  );
};

export default ReviewListItem;

ReviewListItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    publication: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};
