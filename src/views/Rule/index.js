import React from 'react';

class Rule extends React.Component {

  render() {

    var divStyle = {
      textAlign: 'center'
    }

    return(
      <div className="rule" style={divStyle}>
        <h3>基本のルール (기본 규칙)</h3>
        １。相手の好きじゃないどころが見えたら成長するために手伝います。<br />
        1. 상대방의 좋지 않은 부분이 보일 때는 성장할 수 있도록 돕습니다. <br /><br />
        ２。疲れている時、相手が誤解しないように、先に自分の状態を伝えます。<br />
        2. 피곤할 때, 상대방이 오해하지 않도록, 먼저 자신의 상태를 알립니다. <br /><br />
        ３。別れることについては気をつけてはさすようにします。<br />
        3. 헤어지는 것에 관한 이야기는 주의해서 말하도록 합니다. <br /><br />

        <br /><br />

        <h3>家のルール (집의 규칙)</h3>
        １。自分の部屋ののドアにコンディションを　LV1ーLV5　で着いて相手の休み時間を尊重します。<br />
        1. 자기의 방문에 컨디션을 LV1ーLV5 로 붙여놓고, 상대방의 쉬는 시간을 존중합니다. <br /><br />
      </div>
      
    );
  }

}

export default Rule;
