import React from 'react'
import chaiEnzyme from 'chai-enzyme'
import Enzyme, { shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy, sinon } from 'sinon';
import Searcresults_page_grid from './searcresults_page_grid'

Enzyme.configure({ adapter: new Adapter() })

describe('<Searcresults_page_grid/>', function () {
    const spy = jest.spyOn(Searcresults_page_grid.prototype, 'componentDidMount');
    const wrapper = mount(<Searcresults_page_grid data={{ city:'الرياض' }} searchfailed={{ searchfailed:'ايفون' }} />)
    it('Searcresults_page_grid fetch', function () {
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
    });
  })