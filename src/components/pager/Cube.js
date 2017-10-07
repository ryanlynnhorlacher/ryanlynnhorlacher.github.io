import React from 'react';
import { connect } from 'react-redux';
import './cube.css';

class Cube extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 }
    this.classes = ['show-top', 'show-bottom', 'show-left', 'show-right', 'show-front', 'show-back']
  }

  onClick = () => {
  	this.setState({ index: this.state.index % 6 + 1 })
  }

  render() {
    return (
      <div className='container'>
      	<div className={`cube ${this.classes[this.state.index]}`}>
	        <div className='side top'/>
	        <div className='side bottom'/>
	        <div className='side left'/>
	        <div className='side right'/>
	        <div className='side front'/>
	        <div className='side back'/>
	      </div>
	      <div
	      	onClick={ this.onClick }

	      	style={{
	      		position: 'relative',
	      		top: 300
	      	}}
	      >
	      	ROTATE
	      </div>
      </div>  
    );
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Cube);