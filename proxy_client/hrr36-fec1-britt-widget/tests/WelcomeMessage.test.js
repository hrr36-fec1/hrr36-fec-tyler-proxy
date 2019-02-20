import React from 'react';


import Enzyme, {shallow, mount} from 'enzyme'; 
import Adapter from "enzyme-adapter-react-16"; 
Enzyme.configure({adapter: new Adapter() });

// Components
import WelcomeMessage from './WelcomeMessage';

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image',
  };
  const wrapper = shallow(<WelcomeMessage />);
  return { wrapper, props };
}

describe('WelcomeMessage Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});