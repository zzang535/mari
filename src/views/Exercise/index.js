import React from 'react';

import {firestore} from '../../firebase';

import Sub_exercise from '../../components/Sub_exercise';

import './index.scss';

class Exercise extends React.Component {


    render() {

       

        return (
            <div className="exercise">
                
                <Sub_exercise />

                <div className="image">
                    <img src='/images/ing.jpg' />
                </div>
                
                <div className="box">
                    <h4>운동 페이지가 새롭게 단장하고 있습니다.</h4>
                    <h4>기존 손님분들은 Before 탭에서 이용해주세요.</h4>
                    <h4>運動のページを新しく作っています。</h4>
                    <h4>お客様はBeforeタップをご利用ください。</h4>
                    <h4>COOMING SOON :)</h4>
                </div>
            </div>
        );
    }

}

export default Exercise;
