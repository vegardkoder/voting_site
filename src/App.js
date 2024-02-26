import './App.css';
import React, { useState } from 'react';
import profile_pic from './imgs/profile_pic.png';
function App() {

  const [branchSelected, setBranchSelected] = useState("db");

  const branch_option = (option) => {
    document.getElementById(branchSelected).classList.remove("branch-option-button-selected");
    document.getElementById(option).classList.add("branch-option-button-selected");
    setBranchSelected(option);
  }

  return (
    <div className="App">
      <div className="top-bar">
        <div className="left-top-bar">
          <a>Explore</a>
          <a>Add</a>
          <a>Advertise</a>
        </div>
        <div className="right-top-bar">
          <button className="login-button">Login</button>
        </div>
      </div>

      <div className="main-section">
        <h1 className="main-header"> Explore millions of Discord Bots </h1>

        <div className="branch-options-div">
          <button className="branch-option-button branch-option-button-selected" id='db' onClick={_ => branch_option("db")}>Discord Bots</button>
          <button className="branch-option-button" id='ds' onClick={_ => branch_option("ds")}>Discord Servers</button>
          <button className="branch-option-button" id='ms' onClick={_ => branch_option("ms")}>Minecraft Servers</button>
          <button className="branch-option-button" id='g' onClick={_ => branch_option("g")}>Guilded</button>
        </div>
        <input type="text" placeholder="Search for the top bots in Discord..." className="search-bar"></input>

        <h1 className="subsection-header">Top Discord Bots & Discord Apps</h1>
        <h2 className="sub-subsection-header">Top voted bots on Voting.gg</h2>

        <div className="bots-section">
          <div className="bot-section">
            <img src={profile_pic} className="bot-section-pic"/>
            <div>
              <h3 className='bot-section-header'>Battle Master</h3>
              <p className='bot-section-description'>Descripting all sort of things about this bot.</p>
            </div>
            <div className='bot-section-buttons'>
              <button className='bot-section-button'>Invite</button>
              <button className='bot-section-button'>Vote</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
