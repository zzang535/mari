import React from 'react';

import Sub_exercise from '../../../components/Sub_exercise';

import {firestore} from '../../../firebase';

import './index.scss';

class Exercise_before extends React.Component {

    state = {
        exercises: [

        ],
        id: '',
        date: '',
        name: 'mari',
        content: '',

        walkingSum: '',
    }

    async componentDidMount() {

        // 배열 생성 
        let exercises = []

        // 데이터 불러오기
        await firestore.collection('exercise').get().
            then(docs => {
                docs.forEach(doc => {
                    exercises.push({
                        id: doc.id,
                        date: doc.data().date,
                        name: doc.data().name,
                        content: doc.data().content,
                    });
                })
            })

        // ************ 여기서 튜닝하시면 됩니다. ************** //
        let distances = []
        // 워킹 합계 구하는 함수 
        function walkingSum() {
            exercises.forEach(element => {
                if(element.name === "mari"){
                    let temp = element.content.split(" ");
                    distances.push(temp);
                }    
            });
            console.log(distances);
        }
        
        walkingSum();

        // compare function for array sort
        function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const dateA = a.date.toUpperCase();
            const dateB = b.date.toUpperCase();
            
            let comparison = 0;
            if (dateA > dateB) {
                comparison = -1;
            } else if (dateA < dateB) {
                comparison = 1;
            }
            return comparison;
            }

        // exercise sort by date
        exercises.sort(compare);

        // 불러와서 가공한 뒤, State에 집어넣기
        this.setState({
            exercises: exercises,
        });

        console.log(this.state.exercises);
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

            firestore.collection("exercise").add({
                date: this.state.date,
                name: this.state.name,
                content: this.state.content,
            }).then(r => {
                window.confirm("등록완료");
                window.location.reload();
            });

        }

    }

    deleteHandler = (id) => {

        var r = window.confirm("삭제하시겠습니까?");

        if (r === true) {

            firestore.collection("exercise").doc(id).delete()
            .then(() => {
                window.confirm("삭제완료");
                window.location.reload();
            })

        }
    }


    render() {

        var divStyle = {
            textAlign: 'center'
        }

        const MariTakeDisplay = this.state.exercises.map((exercise) => {
            if(exercise.name === "mari"){
                return (
                    <div>
                        <span key={exercise.id}>
                            {exercise.date} | {exercise.content}
                        </span>
                        <span className="delete">
                            <button onClick={ () => this.deleteHandler(exercise.id) }>삭제</button>
                        </span>
                    </div>
                )

            }  
        });

        const JuneTakeDisplay = this.state.exercises.map((exercise) => {
            if(exercise.name === "june"){
                return (
                    <div>
                        <span key={exercise.id}>
                            {exercise.date} | {exercise.content}
                        </span>
                        <span className="delete">
                            <button onClick={ () => this.deleteHandler(exercise.id) }>삭제</button>
                        </span>
                    </div>
                )

            }  
        });

        return (
            <div className="exercise" style={divStyle}>

                <Sub_exercise />

                <div className="image">
                    <img src='/images/health.png' />
                </div>

                <div className="title">
                    <h3>건강</h3>
                </div>

                <div className="input">
                    <div className="date">
                        <h4>날짜</h4>
                        <input type="date" className="date" onChange={this.onChangeHandler} />
                    </div>
                    <div className="name">
                        <h4>이름</h4>
                        <select className="name" onChange={this.onChangeHandler}>
                            <option value="mari">mari</option>
                            <option value="june">june</option>
                        </select>
                    </div>
                    <div className="content">
                        <h4>운동</h4>
                        <textarea className="content" onChange={this.onChangeHandler} />
                    </div>
                    <div className="submit">
                        <button onClick={this.submitHandler}>등록</button>
                    </div>
                </div>

                <div className="output">
                    <div className="mari">
                        <h1>MARI</h1>
                        {MariTakeDisplay}
                    </div>
                    <br />
                    <div className="june">
                        <h1>JUNE</h1>
                        {JuneTakeDisplay}
                    </div>                   
                </div>
                
        
            </div>
        );
    }

}

export default Exercise_before;
