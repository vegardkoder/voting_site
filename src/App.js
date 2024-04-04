import './App.css';
import React, { useState } from 'react';

import profile_pic from './imgs/de_pic.png';
import fire_icon from './imgs/fire_icon.png';
import down_arrow from './imgs/down_arrow.png';
import up_arrow from './imgs/up_arrow.png';
import share_icon from './imgs/share_icon.png';
import trending_icon from './imgs/trending_icon.png';
import star_icon from './imgs/star_icon.png';
import user_icon from './imgs/user_icon.png';

import discordbots from './discordbots.json';
import discordservers from './discordServers.json';
import minecraftservers from './minecraftservers.json';
import guilded from './guilded.json';

function App() {

  const [branchSelected, setBranchSelected] = useState("db");
  const [selectedSortingItem, setSelectedSortingItem] = useState("Top");
  const [showSortingOptions, setShowSortingOptions] = useState(false);
  const sortingSelectorItems = ["Top", "Least", "A-Z"].filter((item) => item != selectedSortingItem);


  const branch_option = (option) => {
    document.getElementById(branchSelected).classList.remove("branch-option-button-selected");
    document.getElementById(option).classList.add("branch-option-button-selected");
    setBranchSelected(option);
  }

  const setSorting = (sorting) => {
    sortingSelectorItems.push(selectedSortingItem);
    sortingSelectorItems.pop(sorting);
    setSelectedSortingItem(sorting);
    setShowSortingOptions(false);
    if (sorting == "Top") {
      discordbots.sort((a, b) => (a.votes < b.votes) ? 1 : -1);
    } else if (sorting == "Least") {
      discordbots.sort((a, b) => (a.votes > b.votes) ? 1 : -1);  
    } else if (sorting == "A-Z") {
      discordbots.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
    }
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
          <img src={user_icon} alt="user icon" style={{marginRight: 20, verticalAlign: -5}}/>
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

        <div className="content-header-section">
          <div>
            <h1 className="subsection-header">Top Discord Bots & Discord Apps</h1>
            <h2 className="sub-subsection-header">Top voted bots on Voting.gg</h2>
          </div>

          <div className="sorting-selector">
            <div className="selected-item" onClick={_ => setShowSortingOptions(!showSortingOptions)}>
              <img src={fire_icon} alt="fire icon" className="selector-icon"/>
              <p className="selected-item-text"> {selectedSortingItem} </p>
              <img src={down_arrow} alt="down arrow" className="down-arrow"/>
            </div>
            {showSortingOptions && sortingSelectorItems.map((sortingSelectorItem, i) => 
                <div className="selector-item" style={{top: (i+1)*48 }} onClick={_ => setSorting(sortingSelectorItem)}>
                  <p className="selected-item-text"> {sortingSelectorItem} </p>
                </div>
              )
            }
          </div>

          {/*<select id="cars" name="cars">
            <option value="top">Top</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="least">Least</option>
  </select>*/} 
        </div>
        

        <div className="bots-section">
          { branchSelected == "db" ? discordbots && discordbots.map(({title, description, image, votes, rating, users}) => (
            <div className="bot-section">
              <img src={image} className="bot-section-pic"/>
              <div className="bot-section-main">
                <h3 className='bot-section-header'>{title}</h3>
                <div className='bot-section-info'>
                  <img src={star_icon} alt="star icon" style={{marginRight: 5}}/><p>{rating}</p>
                  <img src={trending_icon} alt="trending icon" style={{marginLeft: 10, marginRight: 5}}/><p>{users}</p>
                </div>
                <p className='bot-section-description'>{description}</p>
              </div>
              <div className='bot-section-buttons'>
                <button className='bot-section-button'>Invite</button>
                <button className='bot-section-button'> Vote ({votes})</button>
                <button className='bot-section-button' style={{}}><img src={share_icon} alt="share button icon" style={{height: 24, width: 24}}/></button>
              </div>
            </div>
          ))
            : branchSelected == "ds" ?
            discordservers && discordservers.map(({title, description, image, votes, rating, users}) => (
              <div className="bot-section">
                <img src={image} className="bot-section-pic"/>
                <div className="bot-section-main">
                  <h3 className='bot-section-header'>{title}</h3>
                  <div className='bot-section-info'>
                    <img src={star_icon} alt="star icon" style={{marginRight: 5}}/><p>{rating}</p>
                    <img src={trending_icon} alt="trending icon" style={{marginLeft: 10, marginRight: 5}}/><p>{users}</p>
                  </div>
                  <p className='bot-section-description'>{description}</p>
                </div>
                <div className='bot-section-buttons'>
                  <button className='bot-section-button'>Invite</button>
                  <button className='bot-section-button'> Vote ({votes})</button>
                  <button className='bot-section-button' style={{}}><img src={share_icon} alt="share button icon" style={{height: 24, width: 24}}/></button>
                </div>
              </div>
            ))
            : branchSelected == "ms" ?
            minecraftservers && minecraftservers.map(({title, description, image, votes, rating, users}) => (
              <div className="bot-section">
                <img src={image} className="bot-section-pic"/>
                <div className="bot-section-main">
                  <h3 className='bot-section-header'>{title}</h3>
                  <div className='bot-section-info'>
                    <img src={star_icon} alt="star icon" style={{marginRight: 5}}/><p>{rating}</p>
                    <img src={trending_icon} alt="trending icon" style={{marginLeft: 10, marginRight: 5}}/><p>{users}</p>
                  </div>
                  <p className='bot-section-description'>{description}</p>
                </div>
                <div className='bot-section-buttons'>
                  <button className='bot-section-button'>Invite</button>
                  <button className='bot-section-button'> Vote ({votes})</button>
                  <button className='bot-section-button' style={{}}><img src={share_icon} alt="share button icon" style={{height: 24, width: 24}}/></button>
                </div>
              </div>
            ))
            :
            guilded && guilded.map(({title, description, image, votes, rating, users}) => (
              <div className="bot-section">
                <img src={image} className="bot-section-pic"/>
                <div className="bot-section-main">
                  <h3 className='bot-section-header'>{title}</h3>
                  <div className='bot-section-info'>
                    <img src={star_icon} alt="star icon" style={{marginRight: 5}}/><p>{rating}</p>
                    <img src={trending_icon} alt="trending icon" style={{marginLeft: 10, marginRight: 5}}/><p>{users}</p>
                  </div>
                  <p className='bot-section-description'>{description}</p>
                </div>
                <div className='bot-section-buttons'>
                  <button className='bot-section-button'>Invite</button>
                  <button className='bot-section-button'> Vote ({votes})</button>
                  <button className='bot-section-button' style={{}}><img src={share_icon} alt="share button icon" style={{height: 24, width: 24}}/></button>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default App;
