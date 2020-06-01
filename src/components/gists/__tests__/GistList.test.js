import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import GistList from '../GistList'; 



describe('components', () => {
   
  it('should render AddImage component', () => {
    const wrapper = shallow(<GistList/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});