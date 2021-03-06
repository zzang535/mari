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

        distance: '',
        refuel: '',
        
        etc: '',
    }

    async componentDidMount() {

        let motorcycles = []

        await firestore.collection('motorcycle_2').get().
            then(docs => {
                docs.forEach(doc => {
                    motorcycles.push({
                        id: doc.id,
                        date: doc.data().date,
                        time: doc.data().time,
                        temperature: doc.data().temperature,
                        distance: doc.data().distance,
                        refuel: doc.data().refuel,
                        etc: doc.data().etc,
                    });
                })
            })
        
        // compare function for array sort
        function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            //if(a.date !== NULL && b.date !== NULL){
                const dateA = a.date.toUpperCase();
                const dateB = b.date.toUpperCase();
            //}
            
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

            firestore.collection("motorcycle_2").add({
                date: this.state.date,
                time: this.state.time,
                temperature: this.state.temperature,
                distance: this.state.distance,
                refuel: this.state.refuel,
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

        // output
        const JuneTakeDisplay = this.state.motorcycles.map((motorcycle) => {
      
                return (
                    <div>
                        <span key={motorcycle.id}>
                            {motorcycle.date} 
                            <br />
                            날짜 : {motorcycle.date} | 
                            시각 : {motorcycle.time} | 
                            기온 : {motorcycle.temperature} | 
                            주행거리 : {motorcycle.distance} | 
                            주유량 : {motorcycle.refuel} | 
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


        const result = this.state.motorcycles.filter( element => element.temperature === "test");
        console.log(result);


        return (
            <div className="motorcycle" style={divStyle}>

                <div className="main-image">
                    <img src='/images/motor.png' />
                </div>

                <div className="input">

                    <h3 className="title">motocycle-check</h3>

                    <div className="date">
                        <h4>날짜</h4>
                        <input type="date" className="date" onChange={this.onChangeHandler} />
                    </div>

                    <div className="time">
                        <h4>시각</h4>
                        <input type="time" className="time" onChange={this.onChangeHandler} />
                    </div>

                    <div className="temperature">
                        <h4>기온</h4>
                        <textarea className="temperature" onChange={this.onChangeHandler} />
                    </div>
                    <div className="distance">
                        <h4>주행거리</h4>
                        <textarea className="distance" onChange={this.onChangeHandler} />
                    </div>
                    <div className="refuel">
                        <h4>주유량</h4>
                        <textarea className="refuel" onChange={this.onChangeHandler} />
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

                    <h3 className="title">check-history</h3>

                    <div className="june">
                        {JuneTakeDisplay}
                    </div>

                </div>                
        
            </div>
        );
    }

}

export default Motorcycle;
