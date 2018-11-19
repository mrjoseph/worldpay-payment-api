import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthorizationSuccessful from './Authorization-successful';

configure({ adapter: new Adapter() });

const handleSettlePaymentSpy = jest.spyOn(AuthorizationSuccessful.prototype, 'handleSettlePayment');
const handlePartialSettleSpy = jest.spyOn(AuthorizationSuccessful.prototype, 'handlePartialSettle');

describe('AuthorizationSuccessful', () => {
  const props = {
    settlePayment: () => {},
    cancelPayment: () => {},
    partialSettlePayment: () => {},
    queryPayment: () => {},
    authorized: {
      settle: 'http://localhost:2000/api/payments/settlements/full/eyJrIjoiazNhYjYzMiJ9',
    },
    settledLinks: {
      refund: 'http://localhost:2000/api/payments/settlements/refunds/full/eyJrIjoiazNhYjYzMiJ9',
    },
    cancelled: {
      cancelledLink: 'https://access.worldpay.com/payments/events/eyJrIjoiazNhYjYzMiJ9',
    },
    partial: {
      partialRefund: 'https://access.worldpay.com/payments/settlements/refunds/partials/eyJrIjoiazNhYjYzMiJ9',
    },
  };
  let component;
  let authorizedOptions;
  beforeEach(() => {
    component = mount(<AuthorizationSuccessful {...props} />);
    authorizedOptions = component.find('AuthorizedOptions');
  });
  describe('GIVEN our payment has been authorized', () => {
    describe('WHEN we click the settle payment button', () => {
      it('should post settle full payment', () => {
        const button = authorizedOptions.find('#settle');
        const settledPaymentOptions = component.find('.settled-payment-options');
        button.simulate('click');
        expect(handleSettlePaymentSpy).toHaveBeenCalled();
        expect(settledPaymentOptions).toHaveLength(1);
      });
    });
    describe('WHEN we click the partial settle payment button', () => {
      it('should post partial settle payment', () => {
        const button = authorizedOptions.find('#partial-settled');
        const partialSettledPaymentOptions = component.find('.partial-settled-payment-options');
        button.simulate('click');
        expect(handlePartialSettleSpy).toHaveBeenCalled();
        expect(partialSettledPaymentOptions).toHaveLength(1);
      });
    });
  });
});
