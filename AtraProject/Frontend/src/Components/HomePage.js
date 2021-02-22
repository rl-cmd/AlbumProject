import React from 'react'
import './Login/login.css'
import { connect } from 'react-redux'
import { actionsUser } from "../Redux/Actions/UserActions";
import "./Login/login.css";
import {
    withRouter
} from "react-router-dom";

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    }
}
const mapDispatchToProps = (dispatch) => (

    {
        setUserName: (name) => dispatch(actionsUser.setUserName(name)),
        setUserPassword: (password) => dispatch(actionsUser.setUserPassword(password)),
        login: () => dispatch(actionsUser.login())
    }

)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function HomePage(props) {

    const { history } = props

    function login() {
        debugger
        history.push('./Login')
    }
    function signUp() {
        debugger
        history.push('/sighUp')

    }


    return (

        <div className="div1">
            <h1>Welcome to our project</h1>
            <h2>please Enter details to connect</h2>
            <br></br>
            <div className="container row bb">
            <div className="col-5"><button className="btn btn-primary " onClick={() => login()}>login</button></div>
            <div className="col-5"><button className="btn btn-primary " onClick={() => signUp()}>signUp</button></div>
            </div>
           

        </div>
    )
}
))
