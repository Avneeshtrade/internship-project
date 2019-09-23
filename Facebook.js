import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
 import axios from 'axios';


class Facebook extends Component{
constructor(){
 super();


 this.responseFacebook=this.responseFacebook.bind(this);

 //this.responsehandler=this.responsehandler.bind(this);
}
responseFacebook=(response)=>{
  if(response){
    let load={
      name:response.name,
      password:response.accessToken,
      email:response.id
    }
    axios({
      method:"post",
      url:"http://localhost:51937/api/values",
      data: JSON.stringify(load),
      success:function(res){

    console.log(res)
      }
      })
 //console.log(response)   

 let payload={
  name:response.email,
  password:response.accessToken
}
axios({
method: 'post',
url: 'http://localhost:51937/api/Token',
data: JSON.stringify(payload),
headers: {
'Content-Type': 'application/json'
},
success: function(res){
//console.log(res)
localStorage.setItem("username",payload.name)
localStorage.setItem("password",res)
}
});
}
else{
  console.log("unable to fetch data")
}
  
}
 
render(){

 
 return ( <FacebookLogin
    appId="422443185136180"
    onFailure={this.responseFacebook}
    autoLoad={false}
    cookie={true}
    callback={this.responseFacebook}
    cssClass="form-wrapper1"
    icon="fa-facebook"
  />

);

}
}
export default Facebook;

