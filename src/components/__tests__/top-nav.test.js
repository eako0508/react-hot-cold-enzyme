import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './../top-nav';

describe('<TopNav />', () =>{
	it('Renders without crashing', ()=>{
		shallow(<TopNav
        //onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
        //onRestartGame={() => props.onRestartGame()}
      />);
	});
	/*
	it('Randers How to Play link', ()=>{
		const wrapper = shallow(<TopNav />);
		expect(wrapper.hasClass('clearfix')).toEqual(true);
	});
	*/
	it('Invokes restart by clicking NewGame', ()=>{
		const callback = jest.fn();
		const wrapper = mount(<TopNav onRestartGame={callback} />);
		const newGameBtn = wrapper.find('.new');
		newGameBtn.simulate('click', {preventDefault(){}});
		expect(callback).toHaveBeenCalled();
	});

	it('call onGenerateAuralUpdate', ()=>{
		const callback = jest.fn();
		const wrapper = mount(<TopNav onGenerateAuralUpdate={callback} />);
		const statusBtn = wrapper.find('.status-link');
		statusBtn.simulate('click', {preventDefault(){}});
		expect(callback).toHaveBeenCalled();
	});
});