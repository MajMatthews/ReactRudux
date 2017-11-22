import React from 'react';
import TabbedSelector from './TabbedSelector';
import Main from './Main';

// require("./Home.css");

class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				{this.props.posts.map((post, i) => <TabbedSelector {...this.props} key={i} i={i} post={post} />)}
			</div>
		)	
	}
}

export default Home;