import React, {Component} from 'react';

import '../../assets/styles/layout/index.css';

const Layout = (props) => {
    return (
        <div className="layout">
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;