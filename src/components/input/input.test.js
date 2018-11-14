import React from 'react';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Input from './input';

configure({ adapter: new Adapter() });

describe('Input', () => {
  const props = {
    type: '',
    className: '',
    name: '',
    placeholder: '',
    autoComplete: '',
    required: '',
    label: '',
    onChange: () => {}
  };

  let component;
  let onChange;
  beforeEach(() => {
    onChange = jest.fn(props.onChange);
    const newProps = {...props, onChange };
    component = shallow (<Input {...newProps} />)

  });

  it('Should call onChange function passed as a prop', () => {
    const input = component.find('input');
    const expected = {
      target: 'hello world'
    };
    expect(onChange.mock.calls.length).toBe(0);
    input.simulate('change', expected);
    expect(onChange).toHaveBeenCalledWith(expected);
    expect(onChange.mock.calls.length).toBe(1);
  });

  it('Should render the input with props', () => {
    const rendered = renderer.create(
        <Input {...props} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
