import React from 'react'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { actionsImage } from "../../Redux/Actions/ImgeActions";

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        image: state.imageReducer.image,
    }
}
const mapDispatchToProps = (dispatch) => (

    {
        setAlbumId: (albumId) => dispatch(actionsImage.setAlbumId(albumId)),
        setId: (id) => dispatch(actionsImage.setId(id)),
        setTitle: (title) => dispatch(actionsImage.setTitle(title)),
        setUrl: (url) => dispatch(actionsImage.setUrl(url)),
        setThumbnailUrl: (thumbnailUrl) => dispatch(actionsImage.setThumbnailUrl(thumbnailUrl)),
    }
)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function (props) {
    const { image, setAlbumId, setId, setTitle, setUrl, setThumbnailUrl, history } = props
    function updateImage(image) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: JSON.stringify(image),
            redirect: 'follow'
        };

        fetch(`http://localhost:5000/images/updateImage/${image._id}`, requestOptions)
            .then(response => response.json())
            .then(result => { console.log(result) })
            .catch(error => console.log('error', error));


    }
    return (
        <>
            <div className="container-fluid">
                <div className="row main-content bg-success text-center">
                    <div className="col-4 text-center company__info gg">
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid">
                            <div className="row">
                            </div>
                            <div className="row">
                                <div className="row">
                                    <input name="albumId" type="number" value={image.albumId} id="albumId" className="form__input" placeholder="enter albumId" onChange={e => setAlbumId(e.target.value)}></input>
                                </div>

                                <div className="row">
                                    <span className="fa fa-lock"></span>
                                    <input type="number" name="id" id="id" value={image.id} className="form__input" placeholder="enter id" onChange={e => setId(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="title" type="text" id="title" value={image.title} className="form__input" placeholder="enter your title" onChange={e => setTitle(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="url" type="text" id="url" value={image.url} className="form__input" placeholder="enter url" onChange={e => setUrl(e.target.value)}></input>
                                </div>
                                <div className="row">
                                    <input name="thumbnailUrl" type="text" value={image.thumbnailUrl} id="thumbnailUrl" className="form__input" placeholder="enter thumbnailUrl" onChange={e => setThumbnailUrl(e.target.value)}></input>
                                </div>

                                <br></br>
                                <div className="row col-8">
                                    <button className="btn" onClick={updateImage(image)}>save</button>
                                    {/* <button className="btn" onClick={reset}>reset</button> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}))

