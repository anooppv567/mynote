import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import "./LoginPage.css";
import {Button} from 'react-bootstrap'
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
        if(this.state.userName&&this.state.password){
            this.props.history.push("/home");
        }
    }

   render()  {
    return(
             <form className="login-box">
                 <div className="logint-ctrls">
                 <div className="logint-ctrl"><label>Name:</label><input type='text' ref="name" placeholder="user Name" value={this.state.userName} onChange={this.handleChange}/></div>
                 <div className="logint-ctrl"><label>Password:</label><input type='password' ref="pwd" placeholder="Password" value={this.state.password} onChange={this.handleChange}/></div>
                 <div className="logint-btn-wrp"><Button bsStyle="success" className="login-btn" onClick={this.onSubmit}>Login</Button></div>  
                 </div>   
             </form>
     );
    }
}

export default LoginPage;


