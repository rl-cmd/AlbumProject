import React from 'react'
import { reduxForm } from "redux-form";
import { formValidatorHelper } from "../Redux_form/formValidator";
import { connect } from "react-redux";
import { actionsUser } from "../../Redux/Actions/UserActions";
import { AiOutlineLogin } from "react-icons/ai";
import { withRouter, Redirect } from "react-router-dom";

import './login.css'
import '../Global/menu.css'

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        newI: state.userReducer.new
    }
}
const mapDispatchToProps = (dispatch) => (

    {
        setUserName: (name) => dispatch(actionsUser.setUserName(name)),
        setUserPass: (password) => dispatch(actionsUser.setUserPass(password)),
        login: () => dispatch(actionsUser.login()),
    }

)
const Login = withRouter(connect(mapStateToProps, mapDispatchToProps)(function Login(props) {

    const { user, newI, setUserName, setUserPass, login } = props
    if (newI === 1) {
        alert("You do not have an account yet, You need to register")
        return <Redirect to={{ pathname: '/sighUp' }} />
    }
    if (user.email !== '') {
        alert("hello");
        return <Redirect to={{ pathname: '/album' }} />
    }

    return (
        <>
            {
                <div className="container-fluid">
                    <div className="row main-content bg-success text-center">
                        <div className="col-md-4 text-center company__info">
                            <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                            <h4 className="company_title"><AiOutlineLogin /></h4>
                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                            <div className="container-fluid">
                                <div className="row">
                                    <h2><AiOutlineLogin /> Login</h2>
                                </div>
                                <div className="row">
                                    <div className="row">
                                        <input type="text" name="username" id="username" className="form__input" placeholder="Username" onChange={(e) => setUserName(e.target.value)}></input>
                                    </div>
                                    <div className="row">
                                        <span className="fa fa-lock"></span>
                                        <input type="password" name="password" id="password" className="form__input" placeholder="Password" onChange={(e) => setUserPass(e.target.value)}></input>
                                    </div>
                                    <br></br>

                                </div>
                                <div className="row col-8">
                                    <input type="submit" value="Submit" className="btn" onClick={() => login()}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}))


export default reduxForm({
    form: "Login",
    validate: formValidatorHelper
})
    (Login)
