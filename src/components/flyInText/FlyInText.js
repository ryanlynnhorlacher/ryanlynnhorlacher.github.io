import React from 'react';
import Letter from './Letter';
import { test } from '../../actions';
import TransitionGroup from 'react-transition-group/TransitionGroup';

const divStyle = {
	marginTop: 100,
	backgroundColor: '#f8f8f8', 
	height: 500,
	width: 500,
}

const containerStyle = {
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
}

class Intro extends React.Component {
	constructor(props) {
		super(props);
		this.state = { start: false }
	}

	componentDidMount() {
		setTimeout( () => this.setState({ start: true }), 0)
	}

  getTop(angle) {
  	return 500 * Math.sin((angle * 180 / Math.PI))
  }

  getLeft(angle) {
  	return 500 * Math.cos((angle * 180 / Math.PI))
  }

  renderLetters = () => {
  	let angle = 0
  	return this.props.string.split('').map((l, i) => {
  		l === ' ' ? l = <span>&nbsp;</span> : null
  		angle++
  		return (
  			<Letter
  				key={ l + i}
  				top={ this.getTop(angle) }
  				left={ this.getLeft(angle) }
  				letter={ l }
  			/>
  		)
  	})
  }

  container = (props) => {
  	return (
  		<div style={ containerStyle }>
  			{ props.children }
  		</div>
  	)
  }

  render() {
    return (
      <div style={ divStyle }>
        <TransitionGroup component={ this.container }>
        	{ this.state.start && this.renderLetters() }
        </TransitionGroup>
      </div>  
    );
  }
}

export default Intro;