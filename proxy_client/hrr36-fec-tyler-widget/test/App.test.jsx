import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/App';
import Metascore from '../client/src/components/Metascore';
import ReviewList from '../client/src/components/ReviewList';
import reviews from '../examples/reviews';


describe('App Unit Tests', () => {
  // mock queryData
  jest
    .spyOn(App.prototype, 'queryData')
    // eslint-disable-next-line func-names
    .mockImplementation(() => Promise.resolve({ data: reviews }));

  const wrapper = shallow(<App />);

  it('Should render a Metascore component', () => {
    expect(wrapper.find(Metascore)).toHaveLength(1);
  });

  it('Should render a ReviewList component', () => {
    expect(wrapper.find(ReviewList)).toHaveLength(1);
  });
});
