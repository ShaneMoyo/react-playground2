import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Gists from '../Gists'; 



describe('components', () => {
   
  it('should render AddImage component', () => {
    const wrapper = shallow(<Gists/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});