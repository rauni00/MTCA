import React, { Component } from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import { withRouter } from 'react-router-dom';
export class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {},
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
		};
		this.props.registerUser(newUser, this.props.history);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { errors } = this.state;
		return (
			<div>
				<div className="register">
					<div className="container">
						<div className="row">
							<div className="col-md-8 m-auto">
								<h1 className="display-4 text-center">Sign Up</h1>
								<p className="lead text-center">
									Create your Trainee Community account
								</p>
								<form onSubmit={this.onSubmit.bind(this)}>
									<div className="form-group">
										<input
											onChange={this.onChange}
											type="text"
											className={classnames(
												'form-control form-control-lg',
												{ 'is-invalid': errors.name }
											)}
											placeholder="Name"
											name="name"
											value={this.state.name}
										/>
										{errors.name && (
											<div className="invalid-feedback">
												{errors.name}
											</div>
										)}
									</div>
									<div className="form-group">
										<input
											onChange={this.onChange}
											type="email"
											className={classnames(
												'form-control form-control-lg',
												{ 'is-invalid': errors.name }
											)}
											placeholder="Email Address"
											name="email"
										/>
										{errors.name && (
											<div className="invalid-feedback">
												{errors.name}
											</div>
										)}
										<small className="form-text text-muted">
											This site uses Gravatar so if you want a
											profile image, use a Gravatar email
										</small>
									</div>
									<div className="form-group">
										<input
											onChange={this.onChange}
											type="password"
											className={classnames(
												'form-control form-control-lg',
												{ 'is-invalid': errors.name }
											)}
											placeholder="Password"
											name="password"
										/>
										{errors.name && (
											<div className="invalid-feedback">
												{errors.name}
											</div>
										)}
									</div>
									<div className="form-group">
										<input
											onChange={this.onChange}
											type="password"
											className={classnames(
												'form-control form-control-lg',
												{ 'is-invalid': errors.name }
											)}
											placeholder="Confirm Password"
											name="password2"
										/>
										{errors.name && (
											<div className="invalid-feedback">
												{errors.name}
											</div>
										)}
									</div>
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

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
