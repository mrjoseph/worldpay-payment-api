import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import content from '../../content.json';
import Form from './form';


configure({ adapter: new Adapter() });
const spy = jest.spyOn(Form.prototype, 'handleChange');
//
describe('<Form />', () => {
  let component;
  const { formData } = content;
  beforeEach(() => {
    component = shallow(<Form formData={formData} />);
  });
  describe('When Submitting the payment form', () => {
    describe('Button Click', () => {
      it('Should call my handleChange', () => {
        const input = component.find('.card-number Input');
        const expected = {
          name: 'cardNumber',
          value: '1234567',
        };

        input.simulate('change', { target: expected });
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith({ target: expected });
        expect(component.state().cardNumber).toEqual(expected.value);
      });
    });
  });
});
