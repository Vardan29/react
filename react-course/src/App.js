import {ROUTES} from './helpers/constants';
import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Switch,
	Route
} from 'react-router-dom';
import Nav from './components/nav';

const App = () => {

	return (
		<Router>
			<div>
				<Nav/>

				<div className={'content'}>
					<Switch>
						<Redirect exact from='/' to='/signIn'/>
						{ROUTES.map(route => (
							<Route key={route.id} path={route.path}>
								{route.component}
							</Route>
						))}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
