import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { deleteComment } from '../actions/postActions';

export class CommentItem extends Component {
	onDeleteClick(postId, commentId) {
		this.props.deleteComment(postId, commentId);
	}
	render() {
		const { postId, comments, auth } = this.props;
		return (
			<div className="card card-body mnb-3">
				<div className="row">
					<div className="col-md-2">
						<a href="profile.html">
							<img
								className="rounded-circle d-none d-md-block"
								src={comments.avatar}
								alt=""
							/>
						</a>
						<br />
						<p className="text-center">{comments.name}</p>
					</div>

					<div className="col-md-10">
						<p className="lead">{comments.text}</p>
						{comments.user === auth.user.id ? (
							<button
								className="btn btn-danger mr-1"
								onClick={this.onDeleteClick.bind(
									this,
									comments._id,
									postId
								)}
								type="button"
							>
								{' '}
								<i className="fas fa-times" />
							</button>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}

CommentItem.propTypes = {
	deleteComment: PropTypes.func.isRequired,
	comments: PropTypes.object.isRequired,
	postId: PropTypes.string.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
