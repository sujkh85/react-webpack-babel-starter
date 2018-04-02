import React, { Component } from 'react';
//import {QuerySwitch, QueryRoute} from '../library/queryrouter/';
//import {Switch , Route} from 'react-router-dom';
import Main from './Main';
// import ProjectLoading from './ProjectLoading';
import PageNotFound from '../error/PageNotFound';
import {Switch , Route} from 'react-router-dom';

class LoginRouter extends Component {
	render() {
		return (
			<Switch {...this.props}>
				<Route path="/" exact component={Main} />
				<Route nomatch component={PageNotFound} />
			</Switch>
		);
	}
}

export default LoginRouter;