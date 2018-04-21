import React from 'react'
import chaiEnzyme from 'chai-enzyme'
import Enzyme, { shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy, sinon } from 'sinon';
import Comparing from './comparing'

Enzyme.configure({ adapter: new Adapter() })

describe('<Comparing/>', function () {
    const spy = jest.spyOn(Comparing.prototype, 'componentDidMount');
    const wrapper = mount(<Comparing data={{ data:'حراج' }} datacity={{ city:'جدة' }} />)
    it('Comparing fetch', function () {
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
    });
  })