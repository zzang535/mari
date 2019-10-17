import React from 'react';

class Sub_mari extends React.Component {

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
        <a href="/mari" style={aStyle}>Me | </a>
        <a href="/ai" style={aStyle}>Ai | </a>
        <a href="/kiki" style={aStyle}>Kiki | </a>
        <a href="/hana" style={aStyle}>Hana</a>
      </div>
    );

  }
}

export default Sub_mari;
