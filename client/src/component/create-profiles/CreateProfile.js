import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { createProfile } from '../actions/profileActions';

export class CreateProfile extends Component {
	constructor(props) {
		super();
		this.state = {
			displaySocialInputs: false,
			handle: '',
			status: '',
			company: '',
			website: '',
			location: '',
			skills: '',
			githubusername: '',
			bio: '',
			twitter: '',
			facebook: '',
			linkedin: '',
			instagram: '',
			youtube: '',
			errors: {},
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit(e) {
		e.preventDefault();

		const profileData = {
			handle: this.state.handle,
			company: this.state.company,
			website: this.state.website,
			status: this.state.status,
			location: this.state.location,
			skills: this.state.skills,
			githubusername: this.state.githubusername,
			bio: this.state.bio,
			twitter: this.state.twitter,
			facebook: this.state.facebook,
			linkedin: this.state.linkedin,
			instagram: this.state.instagram,
			youtube: this.state.youtube,
		};

		this.props.createProfile(profileData, this.props.history);
		// console.log(this.state.errors);
		console.log(profileData);
	}

	render() {
		const { errors, displaySocialInputs } = this.state;

		let socialInputs;

		if (displaySocialInputs) {
			socialInputs = (
				<div>
					<InputGroup
						placeholder="Twitter Profile Url"
						name="twitter"
						icon="fab fa-twitter"
						color="#1da1f2"
						value={this.state.twitter}
						onChange={this.onChange}
						error={errors.twitter}
					/>
					<InputGroup
						placeholder="Instagram Profile Url"
						name="instagram"
						icon="fab fa-instagram"
						color="#c32aa3"
						value={this.state.instagram}
						onChange={this.onChange}
						error={errors.instagram}
					/>
					<InputGroup
						placeholder="Facebook Profile Url"
						name="facebook"
						icon="fab fa-facebook"
						color="#3b5998"
						value={this.state.facebook}
						onChange={this.onChange}
						error={errors.facebook}
					/>
					<InputGroup
						placeholder="YouTube Profile Url"
						name="youtube"
						icon="fab fa-youtube"
						color="#ff0000"
						value={this.state.youtube}
						onChange={this.onChange}
						error={errors.youtube}
					/>
					<InputGroup
						placeholder="Linkedin Profile Url"
						name="linkedin"
						icon="fab fa-linkedin"
						color="#0a66c2"
						value={this.state.linkedin}
						onChange={this.onChange}
						error={errors.linkedin}
					/>
				</div>
			);
		}

		const options = [
			{ label: '*Select Professional Status', value: 0 },
			{ label: 'Developer', value: 'Developer' },
			{ label: 'Junior Developer', value: 'Junior Developer' },
			{ label: 'Senior Developer', value: 'Senior Developer' },
			{ label: 'Manager', value: 'Manager' },
			{ label: 'HR', value: 'HR' },
			{ label: 'Head of Department', value: 'Head of Department' },
			{ label: 'Coder', value: 'Coder' },
			{ label: 'Tester', value: 'Tester' },
		];

		return (
			<div>
				{/* <!-- Create Profile --> */}
				<div className="create-profile">
					<div className="container">
						<div className="row">
							<div className="col-md-8 m-auto">
								<Link to="/dashboard" className="btn btn-info">
									Go Back
								</Link>
								<h1 className="display-4 text-center">
									Create Your Profile
								</h1>
								<p className="lead text-center">
									Let's get some information to make your profile stand
									out
								</p>
								<small className="d-block pb-3 text-danger">
									* = required field
								</small>
								<form
									action="../add-education/add-education.html"
									onSubmit={this.onSubmit.bind(this)}
								>
									<TextFieldGroup
										placeholder="* Profile Handle"
										name="handle"
										value={this.state.handle}
										onChange={this.onChange}
										error={errors.handle}
										info="A unique handle for your profile URL.Your full name , company name , nick name"
									/>
									<SelectListGroup
										placeholder="Status"
										name="status"
										value={this.state.status}
										onChange={this.onChange}
										options={options}
										error={errors.status}
										info="Give us an idea of where you are at in your career"
									/>
									<TextFieldGroup
										placeholder="Company"
										name="company"
										value={this.state.company}
										onChange={this.onChange}
										error={errors.company}
										info="Could be your own company or own your work for"
									/>
									<TextFieldGroup
										placeholder="Website"
										name="website"
										value={this.state.website}
										onChange={this.onChange}
										error={errors.website}
										info="Could be your own website or a company one "
									/>
									<TextFieldGroup
										placeholder="Location"
										name="location"
										value={this.state.location}
										onChange={this.onChange}
										error={errors.location}
										info="City or city & state suggested values (eg. Boston , MA)"
									/>
									<TextFieldGroup
										placeholder="Skills"
										name="skills"
										value={this.state.skills}
										onChange={this.onChange}
										error={errors.skills}
										info="Please use comma(,) separated value like (eg. HTML , CSS , JAVASCRIPT)"
									/>
									<TextFieldGroup
										placeholder="Github username"
										name="githubusername"
										value={this.state.githubusername}
										onChange={this.onChange}
										error={errors.githubusername}
										info="if you want your latest repos and a Github link , include your username"
									/>
									<TextAreaFieldGroup
										placeholder="Short bio"
										name="bio"
										value={this.state.bio}
										onChange={this.onChange}
										error={errors.bio}
										info="Tell us a little about yourself"
									/>
									<div className="mb-3">
										<button
											type="button"
											onClick={() => {
												this.setState((prevState) => ({
													displaySocialInputs:
														!prevState.displaySocialInputs,
												}));
											}}
											className="btn btn-light"
										>
											Add Social Network Links
										</button>
										<span className="text-muted">Optional</span>
									</div>
									{socialInputs}
									<input
										type="submit"
										value="Submit"
										className="btn btn-info btn-block mt-4"
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
CreateProfile.propTypes = {
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors: state.errors,
});

export default connect(mapStateToProps, { createProfile })(CreateProfile);
