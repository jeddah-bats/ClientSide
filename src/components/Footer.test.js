import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import Enzyme, { shallow } from 'enzyme'; // use shallow, render, or mount when appropriate
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer';

chai.use(chaiEnzyme())
Enzyme.configure({ adapter: new Adapter() })

describe('<Footer />', function () {
    let wrapper
    beforeEach(function () {
        wrapper = shallow(<Footer />)
    })

    it('should have two p elelements in the footer', function () {
        expect(wrapper.find('p')).to.have.length(2)
    })
    it('should have the current year in the copyright statement', function () {
        expect(wrapper.find('.copyright')).to.contain.text(new Date().getFullYear().toString())
    })
});