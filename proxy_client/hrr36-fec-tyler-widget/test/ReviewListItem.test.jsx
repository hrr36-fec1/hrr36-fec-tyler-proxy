import React from 'react';
import { shallow } from 'enzyme';

import ReviewListItem from '../client/src/components/ReviewListItem';
import reviews from '../examples/reviews';

describe('ReviewListItem', () => {
  const wrapper = shallow(<ReviewListItem review={reviews[0]} />);
  const wrapperMixed = shallow(<ReviewListItem review={reviews[1]} />);
  const wrapperBad = shallow(<ReviewListItem review={reviews[2]} />);

  it('should render without throwing an error', () => {
    expect(wrapper.find('.read_full')).toBeTruthy();
  });

  it('should render integer scores only', () => {
    expect(wrapper.find('.metascore_w.header_size').text()).toBe('91');
  });

  it('should render nice dates', () => {
    expect(wrapper.find('.date').text()).toBe('Feb 9, 1985');
  });

  it('should update an element\'s class based on rating', () => {
    expect(wrapper.find('.movie.positive')).toHaveLength(1);
    expect(wrapperMixed.find('.movie.mixed')).toHaveLength(1);
    expect(wrapperBad.find('.movie.negative')).toHaveLength(1);
  });
});
