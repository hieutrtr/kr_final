import React, { useState } from 'react';
import './SideBar.css';

function SideBar() {
  const [expanded, setExpanded] = useState(false);

  const handleSidebarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div></div>
  );
}

export default SideBar;
