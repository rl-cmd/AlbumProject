import produce from 'immer';
import actions from 'redux-form/lib/actions';
import createReducer from "./reducerUtils";
const initialState = {
    user: {
        id: "",
        name: "",
        pass: "",
        firstName: "",
        lastName: "",
        email: "",
    },
    new: 0

}
const users = {

    setUserDetails(state, action) {
        console.log(actions.payload);
        state.user.id = action.payload._id;
        state.user.name = action.payload.name;
        state.user.pass = action.payload.pass;
        state.user.firstName = action.payload.firstName;
        state.user.lastName = action.payload.lastName;
        state.user.email = action.payload.email;
    },
    setUserId(state, action) {
        state.user.id = action.payload;
    },
    setNew(state, action) {
        state.new = 1;
    },
    setUserName(state, action) {
        state.user.name = action.payload;
    },
    setUserPass(state, action) {
        state.user.pass = action.payload;
    },
    setUserPhone(state, action) {
        state.user.phone = action.payload;
    },
    setUserEmail(state, action) {
        state.user.email = action.payload;
    },
}
export default produce((state, action) => createReducer(state, action, users), initialState);