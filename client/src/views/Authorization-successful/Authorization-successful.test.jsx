import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthorizationSuccessful from './Authorization-successful';

configure({ adapter: new Adapter() });

const handleSettlePaymentSpy = jest.spyOn(AuthorizationSuccessful.prototype, 'handleSettlePayment');

describe('AuthorizationSuccessful', () => {
  const props = {
    settlePayment: () => {},
    authorized: {
      settle: "http://localhost:2000/api/payments/settlements/full/eyJrIjoiazNhYjYzMiJ9"
    },
    settledLinks: {
      refund: "http://localhost:2000/api/payments/settlements/refunds/full/eyJrIjoiazNhYjYzMiJ9"
    }
  }
  let component;
  let authorizedOptions;
  beforeEach(() => {
    component = mount(<AuthorizationSuccessful {...props} />)
    authorizedOptions = component.find("AuthorizedOptions");
  });
  describe("GIVEN our payment has been authorized", () => {
    describe("WHEN we click the settle payment button", () => {
      it("should post settle full payment", () => {
        const button = authorizedOptions.find('#settle');
        const settledPaymentOptions = component.find('.settled-payment-options');
        button.simulate('click');
        expect(handleSettlePaymentSpy).toHaveBeenCalled();
        expect(settledPaymentOptions).toHaveLength(1);
      });
    });
  });
});
