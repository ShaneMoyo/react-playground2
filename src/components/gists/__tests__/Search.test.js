import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Search from '../Search'; 



describe('components', () => {
   
  it('should render AddImage component', () => {
    const wrapper = shallow(<Search/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});