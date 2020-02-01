import React from 'react';

import { firestore } from '../../firebase';
import { storage } from '../../firebase';

import './index.scss';

class Study extends React.Component {

    state = {
        studies: [

        ],
        id: '',
        date: '',
        name: 'mari',
        japanese: '',
        korean: '',
        file: '',
        url: '',
    }

    async componentDidMount() {

        let studies = []

        await firestore.collection('study').get().
            then(docs => {
                docs.forEach(doc => {
                    studies.push({
                        id: doc.id,
                        date: doc.data().date,
                        name: doc.data().name,
                        japanese: doc.data().japanese,
                        korean: doc.data().korean,
                        url: doc.data().url,
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
        studies.sort(compare);

        this.setState({
            studies: studies,
        });

        console.log(this.state.studies);
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.className]: e.target.value,
        });
        console.log(this.state);
    }

    fileSelectedHandler = (e) => {

        console.log(e.target.files);

        this.setState({ 
            file: e.target.files[0]
        }, () => {
            console.log(this.state.file);
        })
    }

    submitHandler = (e) => {

        var r = window.confirm("등록하시겠습니까?");

        if (r === true) 

            if(this.state.file){

                storage.ref(`images/${this.state.file.name}`) //경로 파기
                        .put(this.state.file).then(r => { //파일 집어넣기

                            // 이미지 경로로 참조 만들기.
                            var ref = storage.ref(`images/${this.state.file.name}`);

                            // 참조를 통해 url 가져오기.
                            ref.getDownloadURL().then((url) => {
                                this.setState({
                                    url: url
                                }, () => {

                                    // 무한확장범위시작 // //

                                    // 마지막으로 firebase에 add 해주기.
                                    firestore.collection('study').add({
                                        date: this.state.date,
                                        name: this.state.name,
                                        japanese: this.state.japanese,
                                        korean: this.state.korean,
                                        url: this.state.url,
                                    }).then(r => {           
                                        // 화면 리로딩
                                        window.confirm("등록완료");
                                        window.location.reload();                                                          
                                    })
            
                                });
                            });  
                        });    

            

            } else {

                firestore.collection('study').add({
                    date: this.state.date,
                    name: this.state.name,
                    japanese: this.state.japanese,
                    korean: this.state.korean,
                }).then(r => {           
                    // 화면 리로딩
                    window.confirm("등록완료");
                    window.location.reload();                                                          
                })

            }

    }

    deleteHandler = (id) => {

        var r = window.confirm("삭제하시겠습니까?");

        if (r === true) {

            firestore.collection("study").doc(id).delete()
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

        const MariTakeDisplay = this.state.studies.map((study) => {
            if(study.name === "mari"){
                return (
                    <div className="box">
                        <span key={study.id}>
                            <div>{study.date}</div>
                            <div>{study.japanese}</div>
                            <div>{study.korean} </div>
                            <img src={study.url} width="200px"/>
                        </span>
                        <div className="delete">
                            <button onClick={ () => this.deleteHandler(study.id) }>삭제</button>
                        </div>
                    </div>
                )

            }  
        });

        const JuneTakeDisplay = this.state.studies.map((study) => {
            if(study.name === "june"){
                return (
                    <div className="box">
                        <span key={study.id}>
                            <div>{study.date}</div>
                            <div>{study.japanese}</div>
                            <div>{study.korean} </div>
                            <img src={study.url} width="200px"/>
                        </span>
                        <div className="delete">
                            <button onClick={ () => this.deleteHandler(study.id) }>삭제</button>
                        </div>
                    </div>
                )

            }  
        });

        return (
            <div className="study" style={divStyle}>

                <div className="title">
                    <h3>연구</h3>
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

                    <div className="image">
                        <h4>사진</h4>
                        <div><input type='file' className="image" onChange={this.fileSelectedHandler} /></div>
                    </div>

                    <div className="japanese">
                        <h4>일본어</h4>
                        <textarea className="japanese" onChange={this.onChangeHandler} />
                    </div>

                    <div className="korean">
                        <h4>한국어</h4>
                        <textarea className="korean" onChange={this.onChangeHandler} />
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

export default Study;
