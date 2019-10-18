import React from 'react';

class Rule extends React.Component {

  render() {

    var divStyle = {
      textAlign: 'center'
    }

    return(
      <div className="rule" style={divStyle}>
        １。相手の好きじゃないどころが見えたら成長するために手伝います。<br />
        1. 상대방의 좋지 않은 부분이 보일 때는 성장할 수 있도록 돕습니다. <br /><br />
        ２。疲れている時、相手が誤解しないように、先に自分の状態を伝えます。<br />
        2. 피곤할 때, 상대방이 오해하지 않도록, 먼저 자신의 상태를 알립니다. 
      </div>
      
    );
  }

}

export default Rule;
