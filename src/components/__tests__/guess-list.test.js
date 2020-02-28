import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './../guess-list';

describe('<GuessList />', () =>{
	it('Renders without crashing', ()=>{
		shallow(<GuessList guesses={[]}/>);
		const wrapper = shallow(<GuessList guesses={[]}/>);
		
		expect(wrapper)
	});

	it('Rander guesses', ()=>{
		const guessArray = [1,2,3];
		const wrapper = shallow(<GuessList guesses={guessArray}/>);
		expect(wrapper.exists('li')).toBe(true);
	});

	it('Rander 3 guesses', ()=>{
		const guessArray = [1,2,3];
		const wrapper = shallow(<GuessList guesses={guessArray}/>);
		expect(wrapper.find('li')).toHaveLength(3);
	});
});