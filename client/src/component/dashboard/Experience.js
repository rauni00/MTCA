import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import { deleteExperience } from '../actions/profileActions';
import PropTypes from 'prop-types';
import moment from 'moment';
export class Experience extends React.Component {
	deleteExp(id) {
		this.props.deleteExperience(id);
	}
	render() {
		const { profile } = this.props.profile;
		return (
			<div>
				<div>
					<h4 className="mb-2">Experience Credentials</h4>
					<table className="table">
						<thead>
							<tr>
								<th>Company</th>
								<th>Title</th>
								<th>Years</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{profile.experience.map((items) => (
								<tr>
									<td>{items.title}</td>
									<td>{items.company}</td>
									<td>
										{moment(items.from).format('MM/YYYY')}--
										{moment(items.to).format('MM/YYYY')}
									</td>
									<td>
										<button
											onClick={this.deleteExp.bind(
												this,
												items._id
											)}
											className="btn btn-danger"
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
Experience.propTypes = {
	deleteExperience: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});
export default connect(mapStateToProps, { deleteExperience })(Experience);
