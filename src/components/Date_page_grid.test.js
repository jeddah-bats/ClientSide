import React from 'react'
import chaiEnzyme from 'chai-enzyme'
import Enzyme, { shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy, sinon } from 'sinon';
import Date_page_grid from './Date_page_grid'

Enzyme.configure({ adapter: new Adapter() })

describe('<Date_page_grid/>', function () {
    const spy = jest.spyOn(Date_page_grid.prototype, 'Dofetch');
    const wrapper = mount(<Date_page_grid data={{ city:'مكة' }} />)
    it('Date_page_grid fetch', function () {
        expect(spy).toHaveBeenCalled();
    });
  })