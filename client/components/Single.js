import React from 'react';
import Details from './Details';

// require('./Single.css');

class Single extends React.Component {
	render() {
		const { postId } = this.props.params;

	    const i = this.props.posts.findIndex((post) => post.selector === postId);
	    const post = this.props.posts[i];
		console.log('details id teller', post, 'index', i);
		return (
			<div className="Single">
				<Details i={i} post={post} {...this.props} />
			</div>
		)	
	}
}

export default Single;