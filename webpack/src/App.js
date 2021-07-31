import React, { useState } from 'react';
import ContactUs from './containers/contact-us';
import About from './containers/about';
import Todos from './containers/todos';
import Home from './containers/home';
import { TABS } from './helpers/constants';
import './assets/styles/index.css';

const App = () => {

  const [selectedTabId, setSelectedTabId] = useState(TABS[0].id);

  const getSelectedTab = () => {
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
  return (
    <div>
      <ul>
        {TABS.map(tab => (
          <li
            key={tab.id}
            className={tab.id === selectedTabId ? 'active' : ''}
            onClick={() => setSelectedTabId(tab.id)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <div className={'content'}>
        {getSelectedTab()}
      </div>
    </div>
  );

};

export default App;