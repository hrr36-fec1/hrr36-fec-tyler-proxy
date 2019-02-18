import React from 'react';
import { shallow } from 'enzyme';

import ReviewList from '../client/src/components/ReviewList';
import ReviewListItem from '../client/src/components/ReviewListItem';
import reviews from '../examples/reviews';

describe('ReviewList', () => {
  const wrapper = shallow(<ReviewList reviews={reviews} />);

  it('should render without throwing an error', () => {
    expect(wrapper.find('.review_list')).toBeTruthy();
  });

  it('should render several ReviewListItem components', () => {
    const smallerWrapper = shallow(<ReviewList reviews={reviews.slice(0, 5)} />);
    expect(smallerWrapper.find(ReviewListItem)).toHaveLength(5);
  });

  it('should render at most 7 ReviewListItem components', () => {
    const length = reviews.length > 7 ? 7 : reviews.length;
    expect(wrapper.find(ReviewListItem)).toHaveLength(length);
  });
});
