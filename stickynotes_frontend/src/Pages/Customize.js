import React, { Component } from 'react';

class Customize extends Component {
	state = {
		bgClr: this.props.bgColor, 
		noteClr: this.props.noteColor, 
		textClr: this.props.textColor
	}
		
	onBgClick = (e) => {
		this.setState({
			bgClr: e.target.value
		});
		this.props.handleBgColor(e.target.value);		
	}
	
	onNoteClick = (e) => {
		this.setState({ 
			noteClr: e.target.value
		})
		this.props.handleNoteColor(e.target.value);
	}
	
	onTextClick = (e) => {
		this.setState({
			textClr: e.target.value
		})
		this.props.handleTextColor(e.target.value);
	}
	
	render() {
		return (
			<React.Fragment>
				<h1 style={ {textAlign:'center', margin:'35px', fontSize:'35px'} }>Customize Your Environment!</h1>
				
				<div style={superContainer}>
					<div style={containterStyle}>
						<h2 style={h2Style}>Background Color</h2>
						<div style={customizeStyle}>
							<button style={btnStyle} onClick={this.onBgClick} value='red'>Red</button>
							<button style={btnStyle} onClick={this.onBgClick} value='#ff8000'>Orange</button>
							<button style={btnStyle} onClick={this.onBgClick} value='#ffd11a'>Yellow</button>
							<button style={btnStyle} onClick={this.onBgClick} value='#33cc33'>Green</button>
							<button style={btnStyle} onClick={this.onBgClick} value='#1a1aff'>Blue</button>
							<button style={btnStyle} onClick={this.onBgClick} value='#b800e6'>Purple</button>
							<button style={btnStyle} onClick={this.onBgClick} value='white'>White</button>
							<button style={btnStyle} onClick={this.onBgClick} value='black'>Black</button>
						</div>
					</div>
					
					<div style={containterStyle}>
						<h2 style={h2Style}>Sticky Note Color</h2>
						<div style={customizeStyle}>
							<button style={btnStyle} onClick={this.onNoteClick} value='red'>Red</button>
							<button style={btnStyle} onClick={this.onNoteClick} value='#ff8000'>Orange</button>
							<button style={btnStyle} onClick={this.onNoteClick} value='#ffd11a'>Yellow</button>
							<button style={btnStyle} onClick={this.onNoteClick} value='#33cc33'>Green</button>
							<button style={btnStyle} onClick={this.onNoteClick} value='#1a1aff'>Blue</button>
							<button style={btnStyle} onClick={this.onNoteClick} value='#b800e6'>Purple</button>
							<button style={btnStyle} onClick={this.onNoteClick} value='white'>White</button>
							<button style={btnStyle} onClick={this.onNoteClick} value='black'>Black</button>
						</div>
					</div>
					
					<div style={containterStyle}>
						<h2 style={h2Style}>Text Color</h2>
						<div style={customizeStyle}>
							<button style={btnStyle} onClick={this.onTextClick} value='red'>Red</button>
							<button style={btnStyle} onClick={this.onTextClick} value='#ff8000'>Orange</button>
							<button style={btnStyle} onClick={this.onTextClick} value='#ffd11a'>Yellow</button>
							<button style={btnStyle} onClick={this.onTextClick} value='#33cc33'>Green</button>
							<button style={btnStyle} onClick={this.onTextClick} value='#1a1aff'>Blue</button>
							<button style={btnStyle} onClick={this.onTextClick} value='#b800e6'>Purple</button>
							<button style={btnStyle} onClick={this.onTextClick} value='white'>White</button>
							<button style={btnStyle} onClick={this.onTextClick} value='black'>Black</button>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}	
}

const h2Style = {
	fontSize: '25px',
	marginBottom: '5px'
}

const superContainer = {
	display: 'flex',
	flexFlow: 'row wrap',
	justifyContent: 'center'
}

const containterStyle = {
	display: 'block',
	margin: 'auto',
	width: '270px',
	height: '190px',
	textAlign: 'center'
}

const customizeStyle = {
	display: 'flex',
	flexFlow: 'row wrap',
	justifyContent: 'space-between',
	alignContent: 'space-between',
	width: '270px',
	height: '85px'
}

const btnStyle = {
	width: '65px',
	height: '40px',
	borderRadius: '5px',
	fontWeight: 'bold',
	fontSize: '15px'
}

export default Customize;
