import React from 'react'
import chaiEnzyme from 'chai-enzyme'
import Enzyme, { shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { spy, sinon } from 'sinon';
import Chart from './chart'

Enzyme.configure({ adapter: new Adapter() })

describe('<Chart/>', function () {
    const spy = jest.spyOn(Chart.prototype, 'componentDidMount');
    const wrapper = mount(<Chart data={{ city:'الرياض' }} />)
    it('Chart fetch', function () {
        expect(spy).toHaveBeenCalled();
    });
  })