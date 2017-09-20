import React, { Component, PropTypes } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class App extends Component {
	render() {
		return(
			<div>
				<div>
					<span>
					Hello world
				</span>
				</div>
				<div>
					<span>
					Hello
				</span>
				</div>
			</div>
		);
	}
}
export default App;