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
        <a href="/mari" style={aStyle}>Mari | </a>
        <a href="/ai" style={aStyle}>Friends</a>
      </div>
    );

  }
}

export default Sub_mari;
