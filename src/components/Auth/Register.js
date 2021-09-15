import React, { Component } from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import { message} from 'antd';
import Input from "../general/Input";
import {register} from "../../actions/authActions";
//import { decodeUser } from '../../util';

class Register extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            username:"",
            email:"",
            password:"",
            phone:"",
            role:"",
            address:"",
            date:"",
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.auth.errors && nextProps.auth.errors.length > 0){
            nextProps.auth.errors.forEach(error => {
                message.error(error.msg);
            });
        }else{
            message.success("Thank you for signing up");
            setTimeout(()=> this.props.history.push("/"), 3000);
        } 
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit(){
        let split = this.props.location.search.split("?role=");
        split = split[split.length - 1].split("&");
        const role = split[0];
        const{name, username, email, password} = this.state;
        const newUser={
            name, username, email, password, role
        };
        this.props.register(newUser);
    }

    render() {
        const {name, username, email, password, phone, role, address, date} = this.state;
        return (
            <div className="container">
                <h1 style={{color:"black"}}>Register</h1>
                <div className="form">
                    <Input
                    name="name" 
                    type="text" 
                    placeholder="Enter Name" 
                    value={name} 
                    onChange={this.onChange} 
                    /> 
                </div>
                <div className="form">
                    <Input
                    name="username" 
                    type="text" 
                    placeholder="Enter Userame" 
                    value={username} 
                    onChange={this.onChange} 
                    /> 
                </div>
                <div className="form">
                    <Input
                    name="email" 
                    type="email" 
                    placeholder="Enter Email" 
                    value={email} 
                    onChange={this.onChange} 
                    /> 
                </div>
                <div className="form">
                    <Input
                    name="password" 
                    type="password" 
                    placeholder="Enter Password" 
                    value={password} 
                    onChange={this.onChange} 
                    /> 
                </div>
                <div className="form">
                    <Input
                    name="phone" 
                    type="number" 
                    placeholder="Enter Phone Number" 
                    value={phone} 
                    onChange={this.onChange} 
                    /> 
                </div>
                <div className="form">
                    <Input
                    name="role" 
                    type="text" 
                    placeholder="Enter Role" 
                    value={role} 
                    onChange={this.onChange} 
                    /> 
                </div>
                <div className="form">
                    <Input
                    name="address" 
                    type="text" 
                    placeholder="Enter Address" 
                    value={address} 
                    onChange={this.onChange} 
                    /> 
                </div>
                <div className="form">
                    <Input
                    name="date" 
                    type="date" 
                    placeholder="Enter Date" 
                    value={date} 
                    onChange={this.onChange} 
                    /> 
                </div>
                <button className="btn btn-primary" onClick={this.onSubmit}>Register</button>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});
export default connect(mapStateToProps, {register})(withRouter(Register));
