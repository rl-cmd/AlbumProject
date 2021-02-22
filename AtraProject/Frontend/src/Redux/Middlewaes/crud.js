
import { actionsUser } from "../Actions/UserActions";

export const getImages = ({ dispatch, getState }) => next => action => {
    if (action.type === "GET_IMAGES") {
        // debugger
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    return next(action);
}

export const login = ({ dispatch, getState }) => next => action => {
    if (action.type === "LOGIN") {
        // debugger;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                "name": getState().userReducer.user.name,
                "pass": getState().userReducer.user.pass
            }),
            redirect: 'follow'
        };

        fetch("http://localhost:5000/users/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (!result._id) {
                    dispatch(actionsUser.setNew())
                }
                else {
                    dispatch(actionsUser.setUserDetails(result))
                }
            })
            .catch(error => { console.log(error); dispatch(actionsUser.setNew()) });

    }
    return next(action);
}

export const sighUp = ({ dispatch, getState }) => next => action => {
    debugger
    if (action.type === "SIGN_UP") {
        var myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(
                action.payload
            ),
            redirect: 'follow'
        };

        fetch("http://localhost:5000/users/signUp", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result); dispatch(actionsUser.setUserDetails(result))
                // jwt
                // localStorage.setItem('token',resJson.token)
            })
            .catch(error => console.log('error', error));
    }
    return next(action);
}
