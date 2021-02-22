import React from 'react'
import { reduxForm, Field } from "redux-form";
import { formValidatorHelper } from "../Redux_form/formValidator";
import { input } from "../Redux_form/inputControl";
import { connect } from "react-redux";
import { actionsUser } from "../../Redux/Actions/UserActions";
import { AiOutlineUserAdd } from "react-icons/ai";
import { withRouter, Redirect } from 'react-router-dom'
import './login.css'
import '../Global/menu.css'
import './newUser.css'
function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    }
}
const mapDispatchToProps = (dispatch) => (

    {
        setUserName: (name) => dispatch(actionsUser.setUserName(name)),
        setUserPass: (password) => dispatch(actionsUser.setUserPass(password)),
        signUp: (values) => dispatch(actionsUser.signUp(values))
    }

)
const NewUser = withRouter(connect(mapStateToProps, mapDispatchToProps)(function (props) {
    const { user, signUp, handleSubmit, reset } = props
    if (user.email !== '') {
        alert("hello");
        return <Redirect to={{ pathname: '/album' }} />
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row main-content bg-success text-center">
                    <div className="col-md-3 text-center company__info">
                        <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                        <h1 className="company_title"><AiOutlineUserAdd /> </h1>
                    </div>
                    <div className="col-md-9 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h2>    <AiOutlineUserAdd /> sighUp</h2>
                            </div>
                            <div className="row">
                                <form className="form-group" onSubmit={handleSubmit((values) => signUp(values))}>
                                    <div className="row">
                                        <Field name="userName" type="text" component={input} id="userName" placeholder="User Name" />
                                    </div>
                                    <div className="row">
                                        <span className="fa fa-lock"></span>
                                        <Field name="password" type="password" component={input} id="password" placeholder="Password" />
                                    </div>
                                    <div className="row">
                                        <span className="fa fa-lock"></span>
                                        <Field name="email" type="text" component={input} id="email" placeholder="Email" />
                                    </div>

                                    <div className="row">
                                        <button type="button" className="btn col-5" onClick={reset}>Reset</button>
                                        <p className="col-2"></p>
                                        <button type="submit" className="btn col-5"
                                        >continue </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}))


export default reduxForm({
    form: "NewUser",
    validate: formValidatorHelper
})
    (NewUser)

