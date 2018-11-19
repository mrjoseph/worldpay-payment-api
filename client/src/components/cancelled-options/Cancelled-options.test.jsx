import React from 'react';
import renderer from 'react-test-renderer';
import CancelledOptions from './Cancelled-options';

describe('CancelledOptions', () => {
  it('Should render the breadcrumb with props', () => {
    const rendered = renderer.create(
      <CancelledOptions />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
