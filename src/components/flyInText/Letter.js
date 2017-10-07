import React from 'react';
import { connect } from 'react-redux';
import { TweenMax } from "gsap";

class Letter extends React.Component {

  componentWillEnter (callback) {
    TweenMax.fromTo(
    	this.letter,
    	1,
    	{ left: this.props.left, top: this.props.top, opacity: 0 },
    	{ left: 0, top: 0, opacity: 1, onComplete: callback }
    );
  }

  componentWillLeave (callback) {
    TweenMax.fromTo(
    	this.letter,
    	1,
    	{ left: 0, top: 0, opacity: 1 },
    	{ left: this.props.left, top: this.props.top, opacity: 0, onComplete: callback }
    );
  }

  getDisplay(char) {
  	if (char === ' ') {
  		return 
  	}
  }

  render() {
    return (
      <div
      	ref={ div => this.letter = div }
      	style={{ position: 'relative' }}
      >
        { this.props.letter }
      </div>  
    );
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default Letter;