import React, { useState } from 'react'
import { reduxForm, Field } from "redux-form";
import { formValidatorHelper } from "../Redux_form/formValidator";
import { input } from "../Redux_form/inputControl";
import { connect } from "react-redux";
import "../images.css";
import "../Login/login.css";
import { AiOutlinePicCenter } from "react-icons/ai";

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    }
}
const mapDispatchToProps = (dispatch) => (

    {

    }
)
const NewImage = connect(mapStateToProps, mapDispatchToProps)(function (props) {
    const { user, handleSubmit, reset, pristine, submitting, valid } = props
    const [handleFileInput, setHandleFileInput] = useState();
    console.log(handleFileInput)
    const [albumId, setAlbumId] = useState(0);
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    function createMyImage() {
        fetch('http://localhost:5000/Images/createMyImage',
            {
                method: 'POST',
                body: JSON.stringify(
                    {
                        "albumId": albumId,
                        "id": id,
                        "title": title,
                        "url": url,
                        "thumbnailUrl": thumbnailUrl,
                        "user_id": user.id
                    }
                ),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then(response => {

                response.json()
            })
            .then(json => { })
            .catch((err) => {
                console.log("err" + err);
            })


        // (url ולא רק העתקת) העלאת תמונה לשרת באופן ממשי

        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        // var formdata = new FormData();
        // formdata.append("albumId", albumId);
        // formdata.append(" id", id);
        // formdata.append("title", title);
        // formdata.append("thumbnailUrl", thumbnailUrl);
        // formdata.append("user_id", user._id);
        // formdata.append("image", handleFileInput);

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: formdata,
        //     redirect: 'follow'
        // };

        // fetch("http://localhost:5000/images/upload", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
    }
    return (
        <>
            <div className="container-fluid col-8">
                <div className="row main-content bg-success text-center">
                    <div className="col-4 text-center company__info gg">
                        {/* <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span> */}
                        <h4 className="company_title"><AiOutlinePicCenter /></h4>

                    </div>

                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                                <h5><AiOutlinePicCenter /> Upload your image</h5>
                            </div>
                            <div className="row">
                                <div className="row">
                                    <input name="albumId" type="number" id="albumId" className="form__input" placeholder="enter albumId" onChange={e => setAlbumId(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <span className="fa fa-lock"></span>
                                    <input type="number" name="id" id="id" className="form__input" placeholder="enter id" onChange={e => setId(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="title" type="text" id="title" className="form__input" placeholder="enter your title" onChange={e => setTitle(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="url" type="text" id="url" className="form__input" placeholder="enter url" onChange={e => setUrl(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="thumbnailUrl" type="text" id="thumbnailUrl" className="form__input" placeholder="enter thumbnailUrl" onChange={e => setThumbnailUrl(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="url" type="text" id="url" className="form__input" placeholder="enter url" onChange={e => setUrl(e.target.value)}></input>
                                </div>
                                <br></br>
                                <div className="row col-8">
                                    <button type="submit" value="Submit" className="btn" onClick={() => createMyImage()}>save</button>
                                    <button className="btn" onClick={reset}>reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <input name="url" type="file" id="url" className="form__input" placeholder="enter url" onChange={e => setHandleFileInput(e.target.files[0])}></input>
            </div> */}
            {/* <div>
                <form onSubmit={handleSubmit((values) => { createMyImage() })}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>albumId:</label>
                                </td>
                                <td>
                                    <Field
                                        name="albumId"
                                        type="number"
                                        component={input}
                                        id="albumId"
                                        placeholder="enter albumId"
                                        className="clsss"
                                        onChange={e => setAlbumId(e.target.value)}

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>id:</label>
                                </td>
                                <td>
                                    <Field
                                        name="id"
                                        type="number"
                                        component={input}
                                        id="id"
                                        placeholder="enter id"
                                        onChange={e => setId(e.target.value)}
                                        className="clsss"

                                    />

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>title:</label>
                                </td>
                                <td>
                                    <Field
                                        name="title"
                                        type="text"
                                        component={input}
                                        id="title"
                                        placeholder="enter your title"
                                        onChange={e => setTitle(e.target.value)}
                                        className="clsss"

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>url:</label>
                                </td>
                                <td>
                                    <Field
                                        name="url"
                                        type="text"
                                        component={input}
                                        id="url"
                                        placeholder="enter url"
                                        onChange={e => setUrl(e.target.value)}
                                        className="clsss"

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>thumbnailUrl:</label>
                                </td>
                                <td>
                                    <Field
                                        name="thumbnailUrl"
                                        type="text"
                                        component={input}
                                        id="thumbnailUrl"
                                        placeholder="enter thumbnailUrl"
                                        onChange={e => setThumbnailUrl(e.target.value)}
                                        className="clsss"

                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><button type="submit"
                                    disabled={!valid || pristine || submitting}
                                >Submit</button></td>
                                <td><button type="button" onClick={reset}>Reset</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>

        </> */}
        </>
    )
})


export default reduxForm({
    form: "NewImage",
    validate: formValidatorHelper
})
    (NewImage)



