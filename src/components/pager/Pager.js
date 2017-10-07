import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import animatePage from './animatePage';

class Pager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	page: 1,
    	enter: { },
    	leave: { },
    	key: this.guid()
   	}

   	this.timer = null

   	this.components = {
   		Page1,
   		Page2,
   		Page3,
   	}
  }

  nextPage = () => {
  	if (this.state.page < 3) {
  		this.setState({ page: this.state.page + 1, key: this.guid() })
  	} else {
  		this.setState({ page: 1, key: this.guid() })
  	}
  }

  onClickTop = () => {
  	if (this.timer === null) {
	  	const { page } = this.state;
	  	this.setState({
	  		leave: {
	  			to: { rotationX: -90 },
	  			from: { rotationX: 0 },
	  		},
	  		enter: {
	  			from: { rotationX: 90 },
	  			to: { rotationX: 0 },
	  		},
	  	});
	  	setTimeout(this.nextPage, 0);
	  	this.timer = setTimeout(() => this.timer = null, 1500);
  }
  }

  onClickBottom = () => {
  	if (this.timer === null) {
	  	const { page } = this.state;
	  	this.setState({
	  		leave: {
	  			to: { rotationX: 90 },
	  			from: { rotationX: 0 },
	  		},
	  		enter: {
	  			from: { rotationX: -90 },
	  			to: { rotationX: 0 },
	  		},
	  	});
	  	setTimeout(this.nextPage, 0);
	  	this.timer = setTimeout(() => this.timer = null, 1500);
  }
  }

  onClickLeft = () => {
  	if (this.timer === null) {
	  	const { page } = this.state;
	  	this.setState({
	  		leave: {
	  			to: { rotationY: 90 },
	  			from: { rotationY: 0 },
	  		},
	  		enter: {
	  			from: { rotationY: -90 },
	  			to: { rotationY: 0 },
	  		},
	  	});
	  	setTimeout(this.nextPage, 0);
	  	this.timer = setTimeout(() => this.timer = null, 1500);
  }
  }

  onClickRight = () => {
  	if (this.timer === null) {
	  	const { page } = this.state;
	  	this.setState({
	  		leave: {
	  			to: { rotationY: 90 },
	  			from: { rotationY: 0 },
	  		},
	  		enter: {
	  			from: { rotationY: -90 },
	  			to: { rotationY: 0 },
	  		},
	  	});
	  	setTimeout(this.nextPage, 0);
	  	this.timer = setTimeout(() => this.timer = null, 1500);
  }
  }

  guid() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4();
	}

  render() {
  	const { enter, leave, key, page } = this.state
  	const Page = this.components[`Page${page}`]
  	const Animated = animatePage(Page)
    return (
      <div style={{
      	right: 0,
      	left: 0,
      	top: 0,
      	bottom: 0,
      	position: 'fixed',
 				display: 'flex',
 				justifyContent: 'center',
 				alignItems: 'center',
      }}>
        <div onClick={ this.onClickTop }
        	style={{
        		position: 'absolute',
        		top: 40,
        	}}
        >
        	Up
        </div>
        <div onClick={ this.onClickBottom }
        	style={{
        		position: 'absolute',
        		bottom: 40,
        	}}
        >
        	Down
        </div>
        <div onClick={ this.onClickLeft }
        	style={{
        		position: 'absolute',
        		left: 40,
        	}}
        >
        	Left
        </div>
        <div onClick={ this.onClickRight }
        	style={{
        		position: 'absolute',
        		right: 40,
        	}}
        >
        	Right
        </div>
        <TransitionGroup className='animator'>
        	<Animated key={ key } id={ key } enter={ enter } leave={ leave }/>
        </TransitionGroup>
      </div>
    );
  }
}

export default Pager;