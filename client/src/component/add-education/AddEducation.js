import React from 'react';
import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextFieldGroup from '../common/TextFieldGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../actions/profileActions';

export class AddEducation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			school: '',
			degree: '',
			description: '',
			fieldofstudy: '',
			from: '',
			to: '',
			current: false,
			errors: {},
			disabled: false,
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onCheck = this.onCheck.bind(this);
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}
	onSubmit = (e) => {
		e.preventDefault();

		const educationDate = {
			school: this.state.school,
			degree: this.state.degree,
			fieldofstudy: this.state.fieldofstudy,
			from: this.state.from,
			to: this.state.to,
			currnet: this.state.current,
			description: this.state.description,
		};

		this.props.addEducation(educationDate, this.props.history);
	};

	onCheck = (e) => {
		this.setState({ disabled: this.state.disabled, current: this.state.current });
	};

	render() {
		const { errors } = this.state;
		return (
			<div>
				<div className="section add-education">
					<div className="container">
						<div className="row">
							<div className="col-md-8 m-auto">
								<Link to="/dashboard" className="btn btn-light">
									Go Back
								</Link>
								<h1 className="display-4 text-center">
									Add Your Education
								</h1>
								<p className="lead text-center">
									Add any school/collage, bootchamp, etc that you have
									attend
								</p>
								<small className="d-block pb-3 text-danger">
									* = required field
								</small>
								<form onSubmit={this.onSubmit}>
									<TextFieldGroup
										placeholder="*School name "
										name="school"
										value={this.state.school}
										onChange={this.onChange}
										error={errors.school}
									/>
									<TextFieldGroup
										placeholder="* Degree of certification"
										name="degree"
										value={this.state.degree}
										onChange={this.onChange}
										error={errors.degree}
									/>
									<TextFieldGroup
										placeholder="* Enter Field of Study "
										name="fieldofstudy"
										value={this.state.fieldofstudy}
										onChange={this.onChange}
										error={errors.fieldofstudy}
									/>
									<h6>From Date</h6>
									<TextFieldGroup
										type="date"
										placeholder=""
										name="from"
										value={this.state.from}
										onChange={this.onChange}
										error={errors.from}
									/>
									<h6>To Date</h6>
									<TextFieldGroup
										type="date"
										placeholder=""
										name="to"
										value={this.state.to}
										onChange={this.onChange}
										error={errors.to}
										disabled={this.state.disabled ? 'disabled' : ''}
									/>
									<div className="form-check mb-4">
										<input
											onChange={this.onChange}
											type="checkbox"
											className="form-check-input"
											name="current"
											value={this.state.current}
											checked={this.onCheck}
											id="current"
										/>
										<label for="current" className="form-check-label">
											Current
										</label>
									</div>
									<TextAreaFieldGroup
										placeholder="Program Description"
										name="description"
										value={this.state.value}
										onChange={this.onChange}
										error={errors.description}
										info="Tell us about the program that you were in "
									/>
									<input
										type="submit"
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

AddEducation.propTypes = {
	addEducation: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors: state.profile,
});

export default connect(mapStateToProps, { addEducation })(withRouter(AddEducation));
