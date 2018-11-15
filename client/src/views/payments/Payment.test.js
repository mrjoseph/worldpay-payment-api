import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Payments } from './Payments';

configure({ adapter: new Adapter() });

describe('Payments view', () => {
  let getPaymentLinksSpy = jest.fn();
  const props = {
    getPaymentLinks: getPaymentLinksSpy,
    content: { formData: {} }
  };

  beforeAll(() => {
    shallow(<Payments {...props} />);
  });

  describe('When the payment view mounts', () => {
    it('should make a api call to retrive initial data', () => {
      expect(getPaymentLinksSpy).toHaveBeenCalled();
    });
  });
});
