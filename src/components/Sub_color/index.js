import React from 'react';

class Sub_color extends React.Component {

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
        <a href="/green" style={aStyle}>Green | </a>
        <a href="/white" style={aStyle}>White</a>
      </div>
    );

  }
}

export default Sub_color;
