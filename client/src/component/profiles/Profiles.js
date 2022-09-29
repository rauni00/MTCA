import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import Profileltem from './ProfileItem';
import { getProfiles } from '../actions/profileActions';

class Profiles extends Component {
	componentDidMount() {
		this.props.getProfiles();
	}

	render() {
		const { profiles, loading } = this.props.profile;
		let profileltems;

		profileltems = <Spinner />;

		if (profiles === null || loading) {
		} else {
			if (profiles.length > 0) {
				profileltems = profiles.map((profile) => (
					<Profileltem key={profile._id} profile={profile} />
				));
			} else {
				profileltems = <h4>No profiles found...</h4>;
			}
		}
		return (
			<div className="profiles">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="display-4 text-center">Developer Profiles</h1>
							<p className="lead text-center">
								Browse and connect with developers
							</p>
							{profileltems}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Profiles.propTypes = {
	getProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
