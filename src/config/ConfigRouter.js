import React from 'react';
// import {Switch , Route} from 'react-router-dom';
import MainContainer from '../main/MainContainer';
import PageNotFound from '../error/PageNotFound';
import PageNotConnect from '../error/PageNotConnect';
import {Switch , Route} from 'react-router-dom';

const ConfigRouter = (props) => {
	return(
		<Switch {...props} queryname="pagename">
			<Route path="/" exact component={MainContainer} />
			<Route path="/notconnect" component={PageNotConnect}/>
			<Route nomatch component={PageNotFound}/>
		</Switch>
	)
}

export default ConfigRouter;
