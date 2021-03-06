import React from 'react';

import './index.scss';

class History extends React.Component {

  render() {

    var divStyle = {
      textAlign: 'center'
    }

    return(
      <div className="history" style={divStyle}>

        <div className="image">
            <img src='/images/history.svg' />
        </div>

        <div className="box">
          2019.7.27
          <br /><br />
          じゅんさんとまりさんと初めて会った日です。
          <br />
          준씨와 마리씨가 처음 만난 날입니다.<br />
        </div>

        <div className="box">
          2019.8.17
          <br /><br />
          じゅんさんとまりさんとカップルになった日です。
          <br />
          준씨와 마리씨가 커플이 된 날입니다.<br />
        </div>

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

        <div className="box">
          2020.2.25
          <br /><br />
          まりさんの冗談とじゅんさんの考えの間に誤解がありました。
          <br />
          마리씨의 농담과 준씨의 생각 간에 오해가 있었습니다. 
        </div>

        <div className="box">
          2020.5.7
          <br /><br />
          まりさんとじゅんさんが一週間連絡しないようにしたんですが、１日後にまた連絡を始めました。
          <br />
          歴史を見たら、２−３ヶ月に1回ぐらい小さいトラブルが来そうです。
          <br /><br />
          마리씨와 준씨가 1주일간 연락을 쉬기로 했지만, 1일 후에 다시 연락하기로 하였습니다. 
          <br />
          역사를 보면 2-3개월에 한번 씩 작은 트러블이 오는 것 같습니다. 
        </div>

        <div className="box">
          2020.8.17
          <br /><br />
          まりさんとじゅんさんが一年になりました。ありがとうございます。
          <br />
          마리씨와 준씨가 1년이 되었습니다. 감사합니다. 
        </div>

        <div className="box">
          2020.11.12
          <br /><br />
          まりさんとじゅんさんが日本で結婚しました。ありがとうございます。よろしくお願いします。
          <br />
          마리씨와 준씨가 일본에서 결혼했습니다. 감사합니다. 잘부탁드립니다.
        </div>

        <div className="box">
          2020.12.4
          <br /><br />
          まりさんとじゅんさんが韓国で結婚しました。
          <br />
          じゅん：まりさんが”じゅんと結婚して本当によかった”と思うようにいたします。
          <br /><br />
          마리씨와 준씨가 한국에서 결혼했습니다.
          <br />
          준 : 마리씨가 "준과 결혼해서 정말 좋았어요"라고 생각하도록 하겠습니다.    
        </div>

      </div>
    );
  }

}

export default History;
