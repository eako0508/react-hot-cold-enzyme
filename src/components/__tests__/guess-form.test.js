import React from 'react';
import {shallow, mount} from 'enzyme';
 
import GuessForm from './../guess-form';

describe('<GuessForm />', () =>{
	it('Renders without crashing', ()=>{
		shallow(<GuessForm />);
	});

	it('User\'s input uploads to onMakeGuess prop ', ()=>{		
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
		const expectedResult = "50";

		wrapper.find('#userGuess').instance().value = expectedResult;	
		wrapper.simulate('submit', {preventDefault(){}});

		expect(callback).toHaveBeenCalledWith(expectedResult);
	});
});