import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import { deleteAccount, deleteEducation } from '../actions/profileActions';
import PropTypes from 'prop-types';
import moment from 'moment';

export class Education extends React.Component {
	deleteEdu(id) {
		this.props.deleteEducation(id);
	}
	deleteProfile() {
		this.props.deleteAccount();
	}
	render() {
		const { profile } = this.props.profile;
		return (
			<div>
				<div>
					<h4 className="mb-2">EducationCredentials</h4>
					<table className="table">
						<thead>
							<tr>
								<th>School</th>
								<th>Degree</th>
								<th>Years</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{profile.education.map((items) => (
								<tr>
									<td>{items.school}</td>
									<td>{items.degree}</td>
									<td>
										{moment(items.from).format('MM/YYYY')}--
										{moment(items.to).format('MM/YYYY')}
									</td>
									<td>
										<button
											onClick={this.deleteEdu.bind(
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
					<button onClick={this.deleteProfile.bind(this)} className="btn btn-danger">
						Delete My Account
					</button>
				</div>
			</div>
		);
	}
}
Education.propTypes = {
	deleteEducation: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});
export default connect(mapStateToProps, { deleteEducation, deleteAccount })(Education);
//  Education;
