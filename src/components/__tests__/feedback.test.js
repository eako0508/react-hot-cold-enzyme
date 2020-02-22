import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './../feedback';

describe('<Feedback />', () =>{
	it('Renders without crashing', ()=>{
		shallow(<Feedback />);
	});

	
	it('Renders feedback', ()=>{
		const TEST_FEEDBACK = 'ABCD';
		const wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
		expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
	});
	
	
	it('Does not render guessAgain when there\'s no input', ()=>{
		const wrapper = shallow(<Feedback guessCount={0} />);
		expect(wrapper.hasClass('visuallyhidden')).toEqual(false);		
	});
	/*
	it('Renders guessAgain when there\'s at least one guess', ()=>{
		const wrapper = shallow(<Feedback guessCount={0} feedback={'testing'}/>);
		wrapper.instance();
		expect(wrapper.hasClass('visuallyhidden')).toEqual(true);
	});
	*/
});