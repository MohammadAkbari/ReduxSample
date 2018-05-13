import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import bankActionCreators from '../bankActionCreators';

class ArticlesComponent extends Component {

	componentDidMount() {
		this.props.fetchArticles();
	}

	render() {

		let articles = this.props.articles.map((item, index) => (
			<tr key={index}>
				<td className="text-left">{item.title}</td>
				<td className="text-left">{item.author}</td>
			</tr>
		));

		return (
			<div>
				<table>
					<thead>
						<tr>
							<th className="text-left">Subject</th>
							<th className="text-left">Author</th>
						</tr>
					</thead>
					<tbody>
						{articles}
					</tbody>
				</table>
			</div>
		);
	}
}

ArticlesComponent.propTypes = {
	articles: PropTypes.array.isRequired,
	fetchArticles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {

	return {
		articles: state.blog.articles.map(article => ({
			title: article.title,
			author: article.author
		}))
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchArticles: () => dispatch(bankActionCreators.fetchArticles())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesComponent);