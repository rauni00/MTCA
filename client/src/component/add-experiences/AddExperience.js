import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addExperience } from '../actions/profileActions';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextFieldGroup from '../common/TextFieldGroup';
export class AddExperience extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			company: '',
			description: '',
			location: '',
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
	onSubmit = (e) => {
		e.preventDefault();
		const expData = {
			title: this.state.title,
			company: this.state.company,
			location: this.state.location,
			from: this.state.from,
			to: this.state.to,
			current: this.state.current,
			description: this.state.description,
		};
		this.props.addExperience(expData, this.props.history);
	};

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	onCheck = (e) => {
		this.setState({ disabled: this.state.disabled, current: this.state.current });
	};

	render() {
		const { errors } = this.props;
		return (
			<div>
				<div className="section add-experience">
					<div className="container">
						<div className="row">
							<div className="col-md-8 m-auto">
								<Link to="/dashboard" className="btn btn-light">
									Go Back
								</Link>
								<h1 className="display-4 text-center">
									Add Your Experience
								</h1>
								<p className="lead text-center">
									Add any developer/programming positions that you have
									had in the past
								</p>
								<small className="d-block pb-3">* = required field</small>
								<form onSubmit={this.onSubmit}>
									<TextFieldGroup
										placeholder="* Job Title"
										name="title"
										value={this.state.value}
										onChange={this.onChange}
										error={errors.title}
									/>

									<TextFieldGroup
										placeholder="* Company"
										name="company"
										value={this.state.value}
										onChange={this.onChange}
										error={errors.company}
									/>
									<TextFieldGroup
										placeholder="* Location"
										name="location"
										value={this.state.value}
										onChange={this.onChange}
										error={errors.location}
									/>
									<h6>From Date</h6>
									<div className="form-group">
										<input
											type="date"
											onChange={this.onChange}
											value={this.state.value}
											className="form-control form-control-lg"
											name="from"
										/>
									</div>
									<h6>To Date</h6>
									<div className="form-group">
										<input
											type="Date"
											value={this.state.value}
											className="form-control form-control-lg"
											name="to"
										/>
									</div>
									<div className="form-check mb-4">
										<input
											onChange={this.onChange}
											type="checkbox"
											className="form-check-input"
											name="current"
											value={this.state.value}
											checked={this.onCheck}
											id="current"
										/>
										<label for="current" className="form-check-label">
											Current Job
										</label>
									</div>
									<TextAreaFieldGroup
										placeholder="Job Description"
										name="description"
										value={this.state.value}
										onChange={this.onChange}
										error={errors.description}
									/>
									<small className="form-text text-muted">
										Some of your responsibilities, etc
									</small>
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

AddExperience.propTypes = {
	addEducation: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	errors: state.profile,
});

export default connect(mapStateToProps, { addExperience })(withRouter(AddExperience));
