import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import OptionSelect from './option-select';

configure({ adapter: new Adapter() });

describe('Option Select', () => {
  let component;
  let props = {
    onChange: () => {},
    cards: {
      name: "cards",
      cardOption: {
        visa: "visa",
        masterCard: "Master card",
        americanExpress: "American Express"
      }
    }
  };

  let handleChange;
  let onChange;
  beforeEach(() => {
    handleChange = jest.spyOn(OptionSelect.prototype, 'handleChange');
    onChange = jest.fn(props.onChange);
    const newProps = { ...props, onChange, };
    component = shallow(<OptionSelect {...newProps} />)
  });

  describe('on select change', () => {
    it('should call the handleChange function', () => {
      const select = component.find('select');
      expect(component.state().value).toEqual('');
      select.simulate('change', {
        target: {
          value: props.cards.cardOption.masterCard
        }
      });
      expect(handleChange).toHaveBeenCalled();
      expect(handleChange).toHaveBeenCalledWith({
        target: {
          value:  props.cards.cardOption.masterCard
        }
      });
      expect(component.state().value).toEqual(props.cards.cardOption.masterCard);
    });

    it('should call handleChange() handleChange function', () => {
      const select = component.find('select');
      select.simulate('change', {
        target: {
          value: props.cards.cardOption.masterCard
        }
      });

      expect(onChange).toHaveBeenCalled();
    });

    describe('Card images', () => {
      describe('When a card is not selected', () => {
        it('should not display a card',() =>{
          component.setState({value: ''});
          const image = component.find('.flags img');
          expect(image).toHaveLength(0);
        });
      });
      describe('When a card selection is made', () => {
        it('should display a American Express',() => {
          component.setState({value: 'americanExpress'});
          const image = component.find('.flags img');
          expect(image).toHaveLength(1);
          expect(image.hasClass('american-express')).toEqual(true);
        });
        it('should display a mastercard',() => {
          component.setState({value: 'masterCard'});
          const image = component.find('.flags img');
          expect(image).toHaveLength(1);
          expect(image.hasClass('masterCard')).toEqual(true);
        });
        it('should display a visa',() => {
          component.setState({value: 'visa'});
          const image = component.find('.flags img');
          expect(image).toHaveLength(1);
          expect(image.hasClass('visa')).toEqual(true);
        });
      });
    });

    it('Should render the input with props', () => {
      const rendered = renderer.create(
          <OptionSelect {...props} />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  });

});
