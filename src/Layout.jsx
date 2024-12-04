import React from 'react'

import './layout.css';
import AppRouter from './AppRouter';
import AppNav from './components/AppNav';

function Layout() {
  return (
    <div id="app-layout">
        <div className='app-header'>
            <AppNav />
        </div>
        <div className='app-content'>
            <AppRouter />
        </div>
        <div className='app-footer'>
            C
        </div>
    </div>
  )
}

export default Layout;