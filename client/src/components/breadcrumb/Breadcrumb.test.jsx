import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import BreadcrumbWithRouter from './Breadcrumb';

describe('Breadcrumb', () => {
  const props = {
    breadcrumb: {
      checkout: 'checkout',
      payment: 'payment',
      authorized: 'Authorized',
    },
  };

  it('Should render the breadcrumb with props', () => {
    const rendered = renderer.create(
      <Router>
        <BreadcrumbWithRouter {...props} />
      </Router>,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
