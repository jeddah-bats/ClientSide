import React from 'react'
import chaiEnzyme from 'chai-enzyme'
import Enzyme, { shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy, sinon } from 'sinon';
import AllProducts_page_grid from './AllProducts_page_grid'

Enzyme.configure({ adapter: new Adapter() })

describe('<AllProducts_page_grid/>', function () {
    const spy = jest.spyOn(AllProducts_page_grid.prototype, 'componentDidMount');
    const wrapper = mount(<AllProducts_page_grid data={{ city:'جدة' }} />)
    it('AllProducts_page_grid fetch', function () {
        expect(spy).toHaveBeenCalled();
    });
  })