import React from 'react';

import Sub_mari from '../../../components/Sub_mari';

class Hana extends React.Component {
  render() {

    var divStyle = {
      textAlign: 'center'
    }

    var imageStyle = {
        padding: '10px'
    }

    var textStyle = {
        paddingBottom: '30px'
    }

    return(
      <div style={divStyle}>

        <div className="sub_menu">
          <Sub_mari />
        </div>

        <div className="box">
            <div style={imageStyle}>
                <img src='/images/hana.jpeg' width="400px"/>
            </div>
            <div style={textStyle}>
                Mari & Hana in Seoul.
            </div>
        </div>

        <div className="box">
            <div style={imageStyle}>
                <img src='/images/hana2.jpeg' width="400px"/>
            </div>
            <div style={textStyle}>
                Hana is so healthy.
            </div>
        </div>

      </div>

    );
  }
}

export default Hana;
