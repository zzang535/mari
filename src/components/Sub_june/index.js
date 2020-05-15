import React from 'react';

class Sub_june extends React.Component {

  render() {

    var divStyle = {
      margin: '50px',
      textAlign: 'center'
    };

    var aStyle = {
      textDecoration: 'none',
      color: 'red'
    };

    return(
      <div style={divStyle}>
        <a href="/june" style={aStyle}>June | </a>
        <a href="/june-friends" style={aStyle}>Friends</a>
      </div>
    );

  }
}

export default Sub_june;
