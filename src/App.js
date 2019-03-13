import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Directory from './components/Directory';
import AddPhone from './components/AddPhone';

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route exact path="/add" component={AddPhone} />
						<Route exact path="/" component={Directory}  />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
