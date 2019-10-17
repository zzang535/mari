import React from 'react';

class Header extends React.Component {

  render() {

    var divStyle = {
      marginTop: '50px',
      marginBottom: '50px',
      textAlign: 'center'
    };

    var aStyle = {
      textDecoration: 'none',
      color: 'blue'
    };

    return(
      <div style={divStyle}>
        <a href="/" style={aStyle}>Home | </a>
        <a href="/mari" style={aStyle}>Mari | </a>
        <a href="/june" style={aStyle}>June | </a>
        <a href="/rule" style={aStyle}>Rule | </a>
        <a href="/history" style={aStyle}>History | </a>
        <a href="/item" style={aStyle}>Item</a>
      </div>
    );

  }
}

export default Header;
