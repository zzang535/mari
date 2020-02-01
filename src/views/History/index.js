import React from 'react';

import './index.scss';

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

        <div className="box">
          2019.12.4
          <br /><br />
          潤さんも仕事が大変だし、まりさんも日本に変えることが心配してるし、雰囲気がたくさん暗い時間がありました。
          <br />
          준씨도 일이 힘들었고, 마리씨도 일본에 돌아가는 것을 걱정해서, 분위기가 매우 어두운 시간이 있었습니다. 
        </div>
      </div>
    );
  }

}

export default History;
