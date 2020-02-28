import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './../guess-count';

describe('<GuessCount />', () =>{
	it('Renders without crashing', ()=>{
		shallow(<GuessCount guessCount={0}/>);
	});

	it('Displays number correctly', ()=>{
		const guessLength = 5;
		const wrapper = shallow(<GuessCount guessCount={guessLength}/>);
		expect(wrapper.find('#count').text()).toEqual(guessLength.toString());
	});
});