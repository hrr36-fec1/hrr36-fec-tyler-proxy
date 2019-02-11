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
    expect(wrapper.find(ReviewListItem)).toHaveLength(4);
  });
});
