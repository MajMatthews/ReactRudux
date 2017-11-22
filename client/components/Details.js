import React from 'react';
import { Link } from 'react-router';


class TabbedSelector extends React.Component {
	render() {
		const {post, i} = this.props;
		if (!post.tab) {
			return null;
		}
		return (
		    <div className="tabs">
		    	<p>{post.Title}</p>
	      	</div>	
		)	
	}
}

export default TabbedSelector;