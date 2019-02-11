import React from 'react';
import { shallow } from 'enzyme';

import ChartWrapper from '../client/src/components/ChartWrapper';

describe('ChartWrapper', () => {
  const wrapper = shallow(<ChartWrapper type="positive" length={0.5} reviews={1} />);

  it('should display the number of each review type', () => {
    expect(wrapper.find('.count.fr').text()).toBe('1');
    expect(wrapper.find('.count.fr')).toHaveLength(1);
  });

  it('should render bars with length based on number of reviews', () => {
    expect(wrapper.find('.chart').render().prop('style'))
      .toHaveProperty('width', '50%');
  });
});
