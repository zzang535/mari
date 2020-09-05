import React from 'react';
import $ from "jquery";

import './index.scss';

class Home extends React.Component {
 
  

  
  componentDidMount(){

    // GetCookie
    function GetCookie(name){
      var value=null, search=name+"=";
      if(document.cookie.length > 0){
        var offset=document.cookie.indexOf(search);
        if(offset != -1){
          offset+=search.length;
          var end=document.cookie.indexOf(";", offset);
          if(end == -1) end=document.cookie.length;
          value=unescape(document.cookie.substring(offset, end));
        }
      } return value;
    }

    // SetCookie
    function SetCookie(name, value, expiredays){
      var days=1;
      if(days){
        var date=new Date(); 
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires="; expires="+date.toGMTString();
      }else{
        var expires=""; 
      }
      document.cookie=name+"="+value+expires+"; path=/";
    }

    // controlling popup
    
    if(GetCookie('closeToday')=='yes'){

    } else {
      $(".popup").addClass("active");
    }
  
    $(".close").click(function(){

      if( $("input[name='closeToday']").is(":checked") ){
        SetCookie('closeToday', 'yes', 1);
      }
      $(".popup").removeClass("active");
    });

    console.log(GetCookie('closeToday'));
    console.log(GetCookie('closeToday'));

  }

  
  
  render() {


    // anniversary calculating
    var firstDate = new Date(2019, 7, 17);
    var d = new Date(); 
    var currentDate = new Date( d.getFullYear(), d.getMonth(), d.getDate() );
    var oneDay = 24 * 60 * 60 * 1000;
    var result = (currentDate - firstDate) / oneDay + 1;

   


    return(
      <div className="home">

        {/* popup */}
        <div className="popup" id="popup">
          <img src="/images/main/oneyear.gif" />
          <div className="check"><input type="checkbox" name="closeToday"></input> 오늘하루 열지 않기</div>
          <a href="#" className="close">Close</a>
        </div>

        
        <div className="text">
          <h4>안녕하세요, 마리와 준의 인터넷집입니다.</h4>
          <h4>오늘은 이 두 분이 만난지 {result}일이 되는 날입니다.</h4>
        </div>


        <div className="image">
          <img src="/images/main/eat.jpg" width="400px"/>
        </div>

        <div className="image">
          <img src="/images/main/endoHwang.jpg" width="400px"/>
        </div>
        
        <br />

        <div className="image">
          <img src="/images/main/birthday.JPG" width="400px"/>
        </div>

        <br />

        <div className="image">
          <img src="/images/main/winter.jpeg" width="400px"/>
        </div>

        <br />

        <div className="image">
          <img src="/images/main/flower.jpeg" width="400px"/>
        </div>
        

      </div>

    );
  }
}

export default Home;
