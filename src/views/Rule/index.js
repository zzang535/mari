import React from 'react';

import './index.scss';

class Rule extends React.Component {

  render() {

    var divStyle = {
      textAlign: 'center'
    }

    return(

      <div className="rule" style={divStyle}>

        <div className="image">
            <img src='/images/rule.png' />
        </div>

        <h3>基本のルール (기본 규칙)</h3>
        １。相手の好きじゃないどころが見えたら成長するために手伝います。<br />
        1. 상대방의 좋지 않은 부분이 보일 때는 성장할 수 있도록 돕습니다. <br /><br />
        ２。疲れている時、相手が誤解しないように、先に自分の状態を伝えます。<br />
        2. 피곤할 때, 상대방이 오해하지 않도록, 먼저 자신의 상태를 알립니다. <br /><br />
        ３。別れることについては気をつけてはさすようにします。<br />
        3. 헤어지는 것에 관한 이야기는 주의해서 말하도록 합니다. <br /><br />
        ４。ルールについていつも相談を申し出する権利があります。<br />
        4. 규칙에 대해 언제든지 상담을 신청할 권리가 있습니다. <br /><br />

        <br /><br />

        <h3>健康のルール (건강 규칙)</h3>
        １。 十分に寝ます。 <br />
        1. 잠을 충분히 잡니다. <br /><br />
        ２。 水を十分に飲みます。 <br />
        2. 물을 충분히 마십니다. <br /><br />
        ３。植物を十分に食べます。<br />
        3. 식물을 충분히 먹습니다. <br /><br />
        ４。汗が出るまでに活動します。<br />
        4. 땀이 날 정도로 활동합니다. <br /><br />
        ５。換気をよくします。<br />
        5. 환기를 잘 시킵니다. <br /><br />
        ６。日陰に近くにします。<br />
        6. 햇빛을 가까이 합니다. <br /><br />
        ７。条件がない愛をします。<br />
        7. 조건없는 사랑을 합니다. <br /><br />
        

        <br /><br />

        <h3>家のルール (집의 규칙)</h3>
        １。自分の部屋ののドアにコンディションを　LV1ーLV5　で着いて相手の休み時間を尊重します。<br />
        1. 자기의 방문에 컨디션을 LV1ーLV5 로 붙여놓고, 상대방의 쉬는 시간을 존중합니다. <br /><br />

        ２。家の仕事を真面目にしたら、自由休暇をもらえます。休暇日数は次にします。<br />
        2. 집의 일들을 성실히 하면, 자유휴가를 받을 수 있습니다. 휴가일수는 다음과 같이 합니다.<br /><br />


        <div className="holiday">

          <table className="table">
            <tbody>
              <tr className="row0">
                <td className="cellA">근속년수</td>
                <td className="cellB">휴가일수</td>
              </tr>
              <tr className="row1">
                <td className="cellA">1년</td>
                <td className="cellB">15개</td>
              </tr>
              <tr className="row1">
                <td className="cellA">2년</td>
                <td className="cellB">15개</td>
              </tr>
              <tr className="row1">
                <td className="cellA">3년</td>
                <td className="cellB">16개</td>
              </tr>
              <tr className="row1">
                <td className="cellA">4년</td>
                <td className="cellB">16개</td>
              </tr>
              <tr className="row1">
                <td className="cellA">5년</td>
                <td className="cellB">17개</td>
              </tr>
            </tbody>
          </table>

        </div>
        
      


      </div>

      
    );
  }

}

export default Rule;
