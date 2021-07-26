import React, { Component } from 'react';
import ContactUs from './containers/contact-us';
import About from './containers/about';
import Todos from './containers/todos';
import Home from './containers/home';
import { TABS } from './helpers/constants';
import './assets/styles/index.css';

class App extends Component {
  state = {
    selectedTabId: TABS[0].id
  };

  getSelectedTab() {
    const { selectedTabId } = this.state;

    switch (selectedTabId) {
      case 1:
        return <Home />;
      case 2:
        return <Todos />;
      case 3:
        return <About />;
      case 4:
        return <ContactUs />;
      default:
        return null;
    };
  };

  render() {
    const { selectedTabId } = this.state;

    return (
      <div>
        <ul>
          {TABS.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTabId ? 'active' : ''}
              onClick={() => this.setState({ selectedTabId: tab.id })}
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
};

export default App;