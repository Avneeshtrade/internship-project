import React,{Component,Fragment} from "react";
import './App.css';
//import {Redirect} from "react-router-dom";
import axios from "axios";
class Registration extends Component{
constructor(props){
  super(props);
this.state={
    name:'',
    email:'',
    password:''
}
//this.clearstate=this.clearstate.bind(this);
this.submithandler=this.submithandler.bind(this);
this.handleChange=this.handleChange.bind(this);
}

handleChange(event) {
          this.setState({
			  [event.target.name]:event.target.value
		  })
}



submithandler=(event)=>{
  console.log(this.state);
event.preventDefault();
this.setState({
  username:'',
  password:'',
  email:''
})
let payload={
  name:this.state.username,
  email:this.state.email,
  password:this.state.password
}

axios({
  method: 'post',
  url: 'http://localhost:51937/api/values',
  data: JSON.stringify(payload),
  headers: {
  'Content-Type': 'application/json'
  },
  success: function(res){
    if(res === true)
    {
  console.log("successfully Registered")
    }else{
      console.log("Unable to register")
    }
    
  }
})
}
render(){
return (
<Fragment>
<div class="form-wrapper2">
  <form>
    <h1 className="fw1 text-center">Register here</h1>

    <div class="form-item">
                <input type="text"  name="name" onChange={this.handleChange} value={this.state.username}  placeholder="Enter your name"  required />
    </div>
    <div class="form-item">
                <input type="text"  name="password" onChange={this.handleChange} value={this.state.password}  placeholder="Enter the password"  required />
    </div>
    <div class="form-item">
                <input type="text"   name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your Email"  required />
    </div>
    <div class="button-panel">
                <input type="button" onClick={this.submithandler} class="button" value="Register" />
    </div>
  </form>
  <div class="reminder">
    <p>Already have an Account <a href="/login">Login Now</a></p>
  </div>
  
</div>


</Fragment>

);

}

}
export default Registration;
