import '../../polyfills';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AboutPage from '../AboutPage';

Enzyme.configure({ adapter: new Adapter() });

describe('<AboutPage />', () => {
  it('renders content', () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper.text()).toContain('About page');
  });
});
