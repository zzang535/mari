import React from 'react';

import Sub_mari from '../../../components/Sub_mari';

import kiki from '../../../images/kiki.jpg';

class Kiki extends React.Component {
  render() {

    var divStyle = {
      textAlign: 'center'
    }

    return(
      <div style={divStyle}>

        <div className="sub_menu">
          <Sub_mari />
        </div>

        <img src={kiki} width="400px"/>
        <br />
        Hello Kiki


      </div>

    );
  }
}

export default Kiki;
