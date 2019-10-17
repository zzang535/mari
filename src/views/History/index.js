import React from 'react';

class History extends React.Component {

  render() {

    var divStyle = {
      textAlign: 'center'
    }

    return(
      <div className="history" style={divStyle}>
        <div className="box">
          2019.9.6
          <br /><br />
          &#60;リセット&#62;, &#60;どちらでもいい&#62; : 話す時お互いに誤解がありました。
          <br />
          &#60;리셋&#62;, &#60;어떻게든 괜찮아&#62; : 이야기할 때 서로 오해가 있었습니다.<br />
        </div>
      </div>
    );
  }

}

export default History;
