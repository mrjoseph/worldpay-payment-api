import React from 'react';
import renderer from 'react-test-renderer';
import SettledOptions from './Settled-options';

describe('Header', () => {
  it('Should render the checkout view without props', () => {
    const rendered = renderer.create(<SettledOptions />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
