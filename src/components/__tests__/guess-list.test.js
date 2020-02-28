import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './../guess-list';

describe('<GuessList />', () =>{
	it('Renders without crashing', ()=>{
		shallow(<GuessList guesses={[]}/>);
		//const wrapper = shallow(<GuessList guesses={[]}/>);
		
		//expect(wrapper);
	});
/*
	it('Rander guesses', ()=>{
		const guessArray = [1,2,3];
		const wrapper = shallow(<GuessList guesses={guessArray}/>);
		expect(wrapper.exists('li')).toBe(true);
	});
*/
	it('Rander 3 guesses correctly', ()=>{
		const guessArray = [1,2,3];
		const wrapper = shallow(<GuessList guesses={guessArray}/>);
		expect(wrapper.find('li')).toHaveLength(3);
		
		/*
		it('first number is 1',()=>{
			expect(wrapper.find('ul').childAt(0).text("1")).toBeTruthy();
		});
		*/
		
		expect(wrapper.find('ul').childAt(0).text()).toEqual(guessArray[0].toString());
		expect(wrapper.find('ul').childAt(1).text()).toEqual(guessArray[1].toString());
		expect(wrapper.find('ul').childAt(2).text()).toEqual(guessArray[2].toString());
		
	});
});