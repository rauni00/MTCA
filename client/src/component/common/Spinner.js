import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

export class Spinner extends React.Component {
	render() {
		return (
			<div className="d-flex justify-content-center">
				<FadeLoader />
			</div>
		);
	}
}

export default Spinner;
