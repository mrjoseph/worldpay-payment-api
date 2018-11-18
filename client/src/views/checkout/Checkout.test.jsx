import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Checkout from './Checkout';

describe('Header', () => {
  it('Should render the checkout view without props', () => {
    const rendered = renderer.create(<Router><Checkout /></Router>);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
