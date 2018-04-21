import React from 'react'
import chaiEnzyme from 'chai-enzyme'
import Enzyme, { shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy, sinon } from 'sinon';
import Categories_page_grid from './Categories_page_grid'

Enzyme.configure({ adapter: new Adapter() })

describe('<Categories_page_grid/>', function () {
    let spy = jest.spyOn(Categories_page_grid.prototype, 'componentDidMount');
    let wrapper = mount(<Categories_page_grid data={{ city:'مكة' }} cate={{ cate:'اثاث' }} />)
    it('Categories_page_grid fetch 1', function () {
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
    });

     spy = jest.spyOn(Categories_page_grid.prototype, 'componentDidMount');
     wrapper = mount(<Categories_page_grid data={{ city:'جدة' }} cate={{ cate:'العاب فيديو' }} />)
    it('Categories_page_grid fetch 2', function () {
        expect(spy).toHaveBeenCalled();
    });
  })