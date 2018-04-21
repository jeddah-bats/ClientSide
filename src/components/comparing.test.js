import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Comparing from './components/comparing'

chai.use(chaiEnzyme())
Enzyme.configure({ adapter: new Adapter() })


describe('<Comparing/>', function () {

    let wrapper
    beforeEach(function () {
        wrapper = shallow(<Comparing data={{ data:'حراج' }} />)
    })
    it('Comparing', function () {
        expect(wrapper.find('cat')).to.be.not.null;
    });
  })