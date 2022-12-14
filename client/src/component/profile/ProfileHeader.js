import React, { Component } from 'react';
import isEmpty from '../validation/is-empty';

class ProfileHeader extends Component {
	render() {
		const { profile } = this.props;
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="card card-body bg-info text-white mb-3">
						<div className="row">
							<div className="col-4 col-md-3 m-auto">
								<img
									className="rounded-circle navbar-expand-sm"
									src={profile.user.avatar}
									alt=""
									style={{
										height: '150px',
										width: '150px',
										left: '50px',
										position: 'relative',
									}}
								/>
							</div>
						</div>
						<div className="text-center">
							<h1 className="display-4 text-center">{profile.user.name}</h1>
							<p className="lead text-center">{profile.status}</p>
							<p>{profile.location}</p>
							<p>
								{isEmpty(profile.website) ? null : (
									<a
										className="text-white p-2"
										href={profile.website}
										target="_blank"
										rel="noreferrer"
									>
										<i className="fas fa-globe fa-2x" />
									</a>
								)}

								{isEmpty(
									profile.social && profile.social.twiiter
								) ? null : (
									<a
										className="text-white p-2"
										href={profile.social.twitter}
										target="_blank"
										rel="noreferrer"
									>
										<i className="fas fa-twitter fa-2x" />
									</a>
								)}

								{isEmpty(
									profile.social && profile.social.facebook
								) ? null : (
									<a
										className="text-white p-2"
										href={profile.social.facebook}
										target="_blank"
										rel="noreferrer"
									>
										<i className="fas fa-facebook fa-2x" />
									</a>
								)}

								{isEmpty(
									profile.social && profile.social.linkedin
								) ? null : (
									<a
										className="text-white p-2"
										href={profile.social.linkedin}
										target="_blank"
										rel="noreferrer"
									>
										<i className="fas fa-linkedin fa-2x" />
									</a>
								)}

								{isEmpty(
									profile.social && profile.social.youtube
								) ? null : (
									<a
										className="text-white p-2"
										href={profile.social.youtube}
										target="_blank"
										rel="noreferrer"
									>
										<i className="fas fa-youtube fa-2x" />
									</a>
								)}

								{isEmpty(
									profile.social && profile.social.instagram
								) ? null : (
									<a
										className="text-white p-2"
										href={profile.social.instagram}
										target="_blank"
										rel="noreferrer"
									>
										<i className="fas fa-instagram fa-2x" />
									</a>
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ProfileHeader;
