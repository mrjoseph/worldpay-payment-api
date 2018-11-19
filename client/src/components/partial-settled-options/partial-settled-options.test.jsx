import React from 'react';
import renderer from 'react-test-renderer';
import PartialSettledOptions from './partial-settled-options';

describe('CancelledOptions', () => {
  it('Should render the breadcrumb with props', () => {
    const rendered = renderer.create(
      <PartialSettledOptions />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
