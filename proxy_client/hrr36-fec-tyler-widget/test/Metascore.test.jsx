import React from 'react';
import { shallow } from 'enzyme';

import Metascore from '../client/src/components/Metascore';
import ChartWrapper from '../client/src/components/ChartWrapper';

import scores from '../examples/scores';

describe('Metascore', () => {
  const wrapper = shallow(<Metascore scores={scores.mixedScores} />);

  it('should render three bar types', () => {
    expect(wrapper.find(ChartWrapper)).toHaveLength(3);
    expect(wrapper.find({ type: 'positive' })).toHaveLength(1);
    expect(wrapper.find({ type: 'mixed' })).toHaveLength(1);
    expect(wrapper.find({ type: 'negative' })).toHaveLength(1);
  });

  it('should filter reviews appropriately', () => {
    expect(wrapper.find({ type: 'positive' }).prop('reviews')).toBe(1);
    expect(wrapper.find({ type: 'mixed' }).prop('reviews')).toBe(1);
    expect(wrapper.find({ type: 'negative' }).prop('reviews')).toBe(2);
  });

  it('should render proper lengths for the ChartWrappers', () => {
    expect(wrapper.find({ type: 'positive' }).prop('length')).toBe(0.5);
    expect(wrapper.find({ type: 'mixed' }).prop('length')).toBe(0.5);
    expect(wrapper.find({ type: 'negative' }).prop('length')).toBe(1);
  });

  it('should render an integral metascore (not decimal)', () => {
    expect(wrapper.find('.metascore_w').text()).toBe('42');
    expect(wrapper.find('.metascore_w.mixed')).toHaveLength(1);
  });

  it('should render positive average score', () => {
    const posWrapper = shallow(<Metascore scores={scores.posScores} />);
    expect(posWrapper.find('.metascore_w.positive')).toHaveLength(1);
  });

  it('should render negative average score', () => {
    const negWrapper = shallow(<Metascore scores={scores.negScores} />);
    expect(negWrapper.find('.metascore_w.negative')).toHaveLength(1);
  });
});
