import React from 'react';

import Sub_mari from '../../../components/Sub_mari';

import ai from '../../../images/ai1.gif';

class Ai extends React.Component {
  render() {

    var divStyle = {
      textAlign: 'center'
    }

    return(
      <div style={divStyle}>

        <div className="sub_menu">
          <Sub_mari />
        </div>

        <img src={ai} width="400px"/>
        <br />
        Hello Ai

      </div>

    );
  }
}

export default Ai;
