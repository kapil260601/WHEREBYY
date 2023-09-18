import React, { useState } from "react";
import "../index.css";

const Sidebar = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
    if (dropdown2Open) {
      setDropdown2Open(false);
    }
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
    if (dropdown1Open) {
      setDropdown1Open(false);
    }
  };

  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li onClick={toggleDropdown1}>
          Dropdown 1 {dropdown1Open ? "▲" : "▼"}
          {dropdown1Open && (
            <ul className="dropdown">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </li>
        <li onClick={toggleDropdown2}>
          Dropdown 2 {dropdown2Open ? "▲" : "▼"}
          {dropdown2Open && (
            <ul className="dropdown">
              <li>Option A</li>
              <li>Option B</li>
              <li>Option C</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;