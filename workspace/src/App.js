import React from 'react';
import TopMenu from './components/TopMenu';
import SideBar from './components/SideBar';
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
