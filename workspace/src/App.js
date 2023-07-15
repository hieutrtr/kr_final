import React from 'react';
import TopMenu from '../TopMenu';
import SideBar from '../SideBar';
import ContentArea from './components/ContentArea';

function App() {
  return (
    <div className="app">
      <TopMenu />
      <div className="main-content">
        <SideBar />
        <ContentArea />
      </div>
    </div>
  );
}

export default App;
