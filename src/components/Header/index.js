import React from 'react';

import './index.scss';

class Header extends React.Component {

  render() {

   

    return(
      <div className="header">

        <div className="title">
          <h1>Mari & June</h1>
        </div>

        <div className="nav">
          <a href="/">Home | </a>
          <a href="/mari">Mari | </a>
          <a href="/june">June | </a>
          <a href="/exercise">건강 | </a>
          <a href="/study">연구 | </a>
          <a href="/motorcycle">Motor | </a>
          <a href="/rule">Rule | </a>
          <a href="/history">History | </a>
          <a href="/color">Color</a>
        </div>


        <div className="nav_mobile">

          <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span> 
                  
          <ul className="menu">
            <a href="/"><li>Home</li></a>
            <a href="/mari"><li>Mari</li></a>
            <a href="/june"><li>June</li></a>
            <a href="/exercise"><li>건강</li></a>
            <a href="/study"><li>연구</li></a>
            <a href="/motorcycle"><li>Motor</li></a>
            <a href="/rule"><li>Rule</li></a>
            <a href="/history"><li>History</li></a>
            <a href="/color"><li>Color</li></a>
          </ul>

        </div>

      </div>
      
    );

  }
}

export default Header;
