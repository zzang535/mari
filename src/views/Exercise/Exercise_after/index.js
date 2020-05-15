import React from 'react';

import Sub_exercise from '../../../components/Sub_exercise';

import {firestore} from '../../../firebase';

import './index.scss';

class Exercise_before extends React.Component {


    render() {


        return (
            <div className="exercise">
                <Sub_exercise />

                <div className="image">
                    <img src='/images/new.jpg' />
                </div>
              
                <div className="box">
                    <h4>새로운 운동페이지를 기대해주세요!</h4>
                    <h4>新しい運動のページを楽してください！</h4>
                </div>
                
        
            </div>
        );
    }

}

export default Exercise_before;
