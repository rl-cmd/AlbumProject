import React from 'react'
import Login from '../Login/Login'
import NewUser from "../Login/NewUser";
import Images from '../Images'
import {
    Route,
    Switch, Redirect
} from 'react-router-dom'
import MyHistory from '../UserHome/MyHistory';
import Menu from './Menu'
import HomePage from '../HomePage';
import UpdateImage from "../UserHome/UpdateImage";
import NewImage from "../UserHome/NewImage";
import { connect } from "react-redux";
function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    }
}
export default connect(mapStateToProps)(function Routers(props) {
    const { user } = props
    return (
        <>
            {
                user.email !== '' ?
                    <Menu /> : ''
            }
            {/* <Menu /> */}
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/sighUp">
                    <NewUser />
                </Route>
                <Route path="/album">
                    <Images />
                </Route>
                <Route path="/myHistory">
                    <MyHistory />
                </Route>
                <Route path="/updateImg">
                    <UpdateImage />
                </Route>
                <Route path="/newImage" >
                    <NewImage />

                </Route>
                <Redirect from="/*" to="/" />

            </Switch>
        </>
    )
})