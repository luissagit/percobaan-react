import React from 'react';

class Lesson extends React.Component {
	constructor(props) {
		super(props);
		// Nyatakan nilai awal state
		this.state = {isModalOpen : false};
	}
	
	handleClickLesson() {
		this.setState({isModalOpen : true});
	}
	
	handleClickClose() {
		this.setState({isModalOpen : false});
	}
	
	render() {
		let modal;
		
		if (this.state.isModalOpen) {
			modal = ( <div className='modal'>
					<div className='modal-inner'>
						<div className='modal-header'></div>
						<div className='modal-introduction'>
						{/* Tampilkan nama pelajaran */}
							<h2>{this.props.name}</h2>
              
						{/* Tampilkan pengantar pelajaran */}
							<p>{this.props.introduction}</p>
              
						</div>
						<button className='modal-close-btn' onClick={() => {this.handleClickClose()}}>
							Tutup
						</button>
					</div>
				</div>
			);
		}
		
		return (
			<div className='lesson-card'>
				<div className='lesson-item' onClick={() => {this.handleClickLesson()}}>
					<p>{this.props.name}</p>
					<img src={this.props.image}/>
				</div>
				{ modal }
			</div>
		);
	}
}

export default Lesson;