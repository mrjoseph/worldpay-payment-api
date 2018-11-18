import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header';

describe('Header', () => {
  it('Should render the header without props', () => {
    const rendered = renderer.create(<Header />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
