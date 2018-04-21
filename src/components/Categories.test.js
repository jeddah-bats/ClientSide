import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Categories from './Categories'

chai.use(chaiEnzyme())
Enzyme.configure({ adapter: new Adapter() })


describe('<Categories />', function () {
    let wrapper
    beforeEach(function () {
        wrapper = shallow(<Categories data={{ cityname: 'Jeddah' }} />)
    })

    it('should have five images for the five categories', function () {
        expect(wrapper.find('img')).to.have.length(5)
    })

    it('should have five buttons for the five categories', function () {
        expect(wrapper.find('button')).to.have.length(5)
    })
})