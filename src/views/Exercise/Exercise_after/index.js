import React from 'react';

import Sub_exercise from '../../../components/Sub_exercise';

import {firestore} from '../../../firebase';

import './index.scss';

class Exercise_before extends React.Component {

    
    state = {
        exercise_type: '',
    }

    async componentDidMount() {

        // 배열 생성 
        let exercise_type = []

        // 데이터 불러오기
        await firestore.collection('exercise_type').get().
            then(docs => {
                docs.forEach(doc => {
                    exercise_type.push(doc.data().name);
                })
            })

        
        

        this.setState({
            exercise_type: exercise_type,
        });
        console.log(this.state);

       
    }


    onChangeHandler = (e) => {
        this.setState({
            [e.target.className]: e.target.value,
        });
        console.log(this.state);
    }

    submitHandler = (e) => {

        var r = window.confirm("등록하시겠습니까?");

        if (r === true) {

            firestore.collection("exercise_type").add({
                name: this.state.temp,
            }).then(r => {
                window.confirm("등록완료");
                window.location.reload();
            });

        }

    }


    render() {
       


        return (
            <div className="exercise">
                <Sub_exercise />

                <div className="image">
                    <img src='/images/new.jpg' />
                </div>
              
                <div className="box">
                    <h4>안녕하세요.</h4>
                </div>

                <div className="input">
                    <div className="exercise_type">
                        <h4>운동을 추가하세요</h4>
                        <h4>運動を追加してくださいませ。</h4>
                        <textarea className="temp" onChange={this.onChangeHandler} />
                    </div>
                    <div className="submit">
                        <button onClick={this.submitHandler}>등록</button>
                    </div>
                </div>


                <div className="output">
                    {this.state.exercise_type}
                </div>
                
        
            </div>
        );
    }

}

export default Exercise_before;
