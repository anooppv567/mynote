import React,{Component} from 'react';
import "./LoginPage.css";

class LoginPage extends Component{
    constructor(){
        super();
        this.state={
            userName:"",
            password:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(){
        this.setState({
            userName:this.refs.name.value,
            password:this.refs.pwd.value
        });
    }

    onSubmit(){
        console.log(this.state);
    }

   render()  {
    return(
             <form className="login-box">
                 <div className="logint-ctrls">
                 <div className="logint-ctrl"><label>Name:</label><input type='text' ref="name" placeholder="user Name" value={this.state.userName} onChange={this.handleChange}/></div>
                 <div className="logint-ctrl"><label>Password:</label><input type='password' ref="pwd" placeholder="Password" value={this.state.password} onChange={this.handleChange}/></div>
                 <div className="logint-btn-wrp"><button className="login-btn" onClick={this.onSubmit}>Submit</button></div>  
                 </div>   
             </form>
     );
    }
}

export default LoginPage;


