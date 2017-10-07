import React from 'react';
import { TweenMax } from "gsap";
import { unmountComponentAtNode } from 'react-dom';
import { fromJS } from 'immutable';

function animatePage(Page) {
	return class PageAnimator extends React.Component {

	  componentWillEnter (callback) {
	    TweenMax.fromTo(
	    	this.page,
	    	1.5,
	    	this.props.enter.from,
	    	{...this.props.enter.to, onComplete: callback},
	    );
	  }

	  componentWillLeave (callback) {
	    TweenMax.fromTo(
	    	this.page,
	    	1.5,
	    	this.props.leave.from,
	    	{...this.props.leave.to, onComplete: callback},
	    );
	  }

	  render() {
	    return (
	    	<div 
	    		ref={ div => this.page = div }
	    		id={ this.props.id }
	    		className='border'
	    	>
	    		<Page />
	    	</div>
	    )
	  }
	}
}


export default animatePage;