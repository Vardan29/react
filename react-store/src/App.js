import {TABS} from './helpers/constants';
import React, {Component} from 'react';
import Home from './containers/home';
import About from './containers/about';
import ContactUs from './containers/contact-us';

class App extends Component {

	state = {
		selectedTabId: TABS[0].id
	};

	getSelectedTab() {
		const {selectedTabId} = this.state;

		switch (selectedTabId) {
			case 1:
				return <Home/>;
			case 2:
				return <About/>;
			case 3:
				return <ContactUs/>;
			default:
				return null;
		}
	}

	render() {
		const {selectedTabId} = this.state;

		return (
			<div>
				<ul>
					{TABS.map(tab => (
						<li
							key={tab.id}
							className={tab.id === selectedTabId ? 'active' : ''}
							onClick={() => this.setState({selectedTabId: tab.id})}
						>
							{tab.name}
						</li>
					))}
				</ul>
				<div className={'content'}>
					{this.getSelectedTab()}
				</div>
			</div>
		);
	}
}

export default App;
