import React from 'react';

class Sub_exercise extends React.Component {

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
        <a href="/exercise-before" style={aStyle}>Before | </a>
        <a href="/exercise-after" style={aStyle}>After</a>
      </div>
    );

  }
}

export default Sub_exercise;
