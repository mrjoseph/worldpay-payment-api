import React from 'react';
import renderer from 'react-test-renderer';
import RefundOptions from './Refind-options';

describe('Header', () => {
  it('Should render the checkout view without props', () => {
    const rendered = renderer.create(<RefundOptions />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
