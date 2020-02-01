import React from 'react';

import {firestore} from '../../firebase';

import './index.scss';

class Motorcycle extends React.Component {

    state = {
        motorcycles: [

        ],
        id: '',
        date: '',
        time: '',
        temperature: '',
        warmup: '',
        continue: '',
        etc: '',
    }

    async componentDidMount() {

        let motorcycles = []

        await firestore.collection('motorcycle').get().
            then(docs => {
                docs.forEach(doc => {
                    motorcycles.push({
                        id: doc.id,
                        date: doc.data().date,
                        time: doc.data().time,
                        temperature: doc.data().temperature,
                        warmup: doc.data().warmup,
                        continue: doc.data().continue,
                        etc: doc.data().etc,
                    });
                })
            })
        
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
        motorcycles.sort(compare);

        this.setState({
            motorcycles: motorcycles,
        });

        console.log(this.state.motorcycles);
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

            firestore.collection("motorcycle").add({
                date: this.state.date,
                time: this.state.time,
                temperature: this.state.temperature,
                warmup: this.state.warmup,
                continue: this.state.continue,
                etc: this.state.etc,
            }).then(r => {
                window.confirm("등록완료");
                window.location.reload();
            });

        }

    }

    deleteHandler = (id) => {

        var r = window.confirm("삭제하시겠습니까?");

        if (r === true) {

            firestore.collection("motorcycle").doc(id).delete()
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

        const JuneTakeDisplay = this.state.motorcycles.map((motorcycle) => {
      
                return (
                    <div>
                        <span key={motorcycle.id}>
                            {motorcycle.date} 
                            <br />
                            시각 : {motorcycle.time} | 
                            기온 : {motorcycle.temperature} | 
                            예열 : {motorcycle.warmup} | 
                            시동지속 : {motorcycle.continue} | 
                            기타정비 : {motorcycle.etc} | 
                            <br />
                        </span>
                        <span className="delete">
                            <button onClick={ () => this.deleteHandler(motorcycle.id) }>삭제</button>
                        </span>
                        <br /><br />
                    </div>
                )
            
        });

        return (
            <div className="exercise" style={divStyle}>

                <div className="image">
                    <img src='/images/motor.JPG' />
                </div>

                <div className="title">
                    <h3>모터사이클</h3>
                </div>

                <div className="input">
                    <div className="date">
                        <h4>날짜</h4>
                        <input type="date" className="date" onChange={this.onChangeHandler} />
                    </div>

                    <div className="time">
                        <h4>시각</h4>
                        <input type="datetime-local" className="time" onChange={this.onChangeHandler} />
                    </div>

                    <div className="temperature">
                        <h4>기온</h4>
                        <textarea className="temperature" onChange={this.onChangeHandler} />
                    </div>
                    <div className="warmup">
                        <h4>예열</h4>
                        <textarea className="warmup" onChange={this.onChangeHandler} />
                    </div>
                    <div className="continue">
                        <h4>시동지속</h4>
                        <textarea className="continue" onChange={this.onChangeHandler} />
                    </div>
                    <div className="etc">
                        <h4>기타정비</h4>
                        <textarea className="etc" onChange={this.onChangeHandler} />
                    </div>
                    <div className="submit">
                        <button onClick={this.submitHandler}>등록</button>
                    </div>
                </div>

                <div className="output">
                    <div className="june">
                        <h1>JUNE</h1>
                        {JuneTakeDisplay}
                    </div>                   
                </div>
                
        
            </div>
        );
    }

}

export default Motorcycle;
