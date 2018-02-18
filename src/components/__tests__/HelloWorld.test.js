import '../../polyfills';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HelloWorld from '../HelloWorld';

Enzyme.configure({ adapter: new Adapter() });

describe('<HelloWorld />', () => {
  it('renders content', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.text()).toContain('Hello world');
  });
});
