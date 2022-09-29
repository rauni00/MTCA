import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profileActions';
import Spinner from '../common/Spinner';
// import Profile from '../profile/Profile';
import ProfileActions from './ProfileActions.js';
import Experience from './Experience.js';
import Education from './Education.js';
class Dashboard extends React.Component {
	componentDidMount() {
		this.props.getCurrentProfile();
	}
	// onDeleteClick(e) {
	// 	this.props.deleteAccount();
	// }
	render() {
		const { user } = this.props.auth;
		const { profile, loading } = this.props.profile;
		let dashboardContent;
		if (profile === null || loading) {
			dashboardContent = <Spinner />;
		} else {
			// Check if logged in user has profile data
			if (Object.keys(profile).length > 0) {
				dashboardContent = (
					<>
						<ProfileActions />
						<Experience exp={profile.experience} />
						<Education />
					</>
				);
			} else {
				// USER IS LOGGED IN BUT HAS NO PROFILE
				dashboardContent = (
					<div>
						<p className="lead text-muted">Welcome {user.name}</p>
						<p>You have not yet setup a profile, please add some info</p>
						<Link to="/create-profile" className="btn btn-lg btn-info">
							Create Profile
						</Link>
					</div>
				);
			}
		}
		return (
			<div className="dashboard">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="display-4">Dashboard</h1>
							{dashboardContent}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	deleteAccount: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
// import React from 'react';
// import { Link } from 'react-router-dom';

// export class Dashboard extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				{/*Navbar*/}
// 				{/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
// 					<div className="container">
// 						<Link className="navbar-brand" to="/">
// 							TraineeCommunity
// 						</Link>
// 						<button
// 							className="navbar-toggler"
// 							type="button"
// 							data-toggle="collapse"
// 							data-target="#mobile-nav"
// 						>
// 							<span className="navbar-toggler-icon" />
// 						</button>
// 						<div className="collapse navbar-collapse" id="mobile-nav">
// 							<ul className="navbar-nav mr-auto">
// 								<li className="nav-item">
// 									<Link className="nav-link" to="/Profiles">
// 										Trained
// 									</Link>
// 								</li>
// 							</ul>
// 							<ul className="navbar-nav ml-auto">
// 								<li className="nav-item">
// 									<Link className="nav-link" to="Feed">
// 										Post Feed
// 									</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link className="nav-link" to="Dashboard">
// 										Dashboard
// 									</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link className="nav-link" to="Dashboard">
// 										Logout
// 									</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link to="#" className="nav-link">
// 										<img
// 											className="rounded-circle"
// 											style={{ width: '25px', marginRight: '5px' }}
// 											src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
// 											alt=""
// 											title="You Must Have A Gravatar Connected To Your Email To Display An Image"
// 										/>
// 									</Link>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 				</nav> */}
// 				{/* dashboard */}
// 				<div className="dashboard">
// 					<div className="container">
// 						<div className="row">
// 							<div className="col-md-12">
// 								<h1 className="display-4">Dashboard</h1>
// 								<p className="lead text-muted">Welcome John Doe</p>
// 								{/* Dashboard Actions */}
// 								<div className="btn-group mb-4" role="group">
// 									<Link to="/Edit-profile" className="btn btn-light">
// 										<i className="fa fa-user-circle text-info mr-1" />{' '}
// 										Edit Profile
// 									</Link>
// 									<Link to="/Add-experience" className="btn btn-light">
// 										<i className="fab fa-black-tie text-info mr-1" />
// 										Add Experience
// 									</Link>
// 									<Link to="/Add-education" className="btn btn-light">
// 										<i className="fas fa-graduation-cap text-info mr-1" />
// 										Add Education
// 									</Link>
// 								</div>
// 								{/* Experience */}
// 								<div>
// 									<h4 className="mb-2">Experience Credentials</h4>
// 									<table className="table">
// 										<thead>
// 											<tr>
// 												<th>Company</th>
// 												<th>Title</th>
// 												<th>Years</th>
// 												<th />
// 											</tr>
// 										</thead>
// 										<tbody>
// 											<tr>
// 												<td>Tech Guy Web Solutions</td>
// 												<td>Senior Trainee</td>
// 												<td>02-03-2009-01-02-2014</td>
// 												<td>
// 													<button className="btn btn-danger">
// 														Delete
// 													</button>
// 												</td>
// 											</tr>
// 											<tr>
// 												<td>Micron Infotech</td>
// 												<td>Instructor &amp; Trainee</td>
// 												<td>02-03-2015-Now</td>
// 												<td>
// 													<button className="btn btn-danger">
// 														Delete
// 													</button>
// 												</td>
// 											</tr>
// 										</tbody>
// 									</table>
// 								</div>
// 								{/* Education */}
// 								<div>
// 									<h4 className="mb-2">EducationCredentials</h4>
// 									<table className="table">
// 										<thead>
// 											<tr>
// 												<th>School</th>
// 												<th>Degree</th>
// 												<th>Years</th>
// 												<th />
// 											</tr>
// 										</thead>
// 										<tbody>
// 											<tr>
// 												<td>Tech Guy Web Solutions</td>
// 												<td>Senior Trainee</td>
// 												<td>02-03-2009-01-02-2014</td>
// 												<td>
// 													<button className="btn btn-danger">
// 														Delete
// 													</button>
// 												</td>
// 											</tr>
// 											<tr>
// 												<td>Micron Infotech</td>
// 												<td>Instructor &amp; Trainee</td>
// 												<td>02-03-2015-Now</td>
// 												<td>
// 													<button className="btn btn-danger">
// 														Delete
// 													</button>
// 												</td>
// 											</tr>
// 										</tbody>
// 									</table>
// 									<button className="btn btn-danger">
// 										Delete My Account
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default Dashboard;
