import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'

export default class PassChange extends Component {
    constructor(props){
        super(props)

        const token = localStorage.getItem("token")
        

        let loggedIn =true

        if(token==null)
        {
            loggedIn=false
        }

        this.state = {
            username:'',
            password:'',
            confirm_password:'',
            loggedIn
        }
        this.onChange=this.onChange.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/login" />
        }
        return (
            <div class="ok">
                    <div class="container">
                        <form >

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="username">Username:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="username1" name="username" value={this.state.username} onChange={this.onChange}  ></input>
                                </div>
                            </div>    
                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="password">New Password:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="password1" name="password" value={this.state.password} onChange={this.onChange}  ></input>
                                </div>
                            </div>   
                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="confirm_password">Confirm Password:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="confirm_password1" name="confirm_password" value={this.state.confirm_password} onChange={this.onChange}  ></input>
                                </div>
                            </div>                           

                            <div class="row">
                                <input type="submit" id="create" value="Set Password"></input>
                            </div>

                        </form>
                    </div>
            </div>      
        )
    }
}