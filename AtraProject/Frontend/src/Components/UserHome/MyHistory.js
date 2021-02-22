import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from "react-router-dom";
import { actionsImage } from "../../Redux/Actions/ImgeActions";
import '../images.css'
function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        image: state.imageReducer.image,
    }
}
const mapDispatchToProps = (dispatch) => (
    {
        addImage: (img) => dispatch(actionsImage.addImage(img))
    }

)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Images(props) {
    const { user, addImage, history } = props
    const [album, setAlboom] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/images/getImagesByIdUser/${user.id}`)
            .then(response => response.json())
            .then(json => { console.log(json); setAlboom(json) })
    }, [])
    function deleteImage(image1) {
        var myHeaders = new Headers();
        myHeaders.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        // myHeaders.append("Authorization",localStorage.getItem('token'))

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };
        debugger
        fetch(`http://localhost:5000/Images/deleteImage/${image1._id}`, requestOptions)
            .then(response => response.text())
            .then(result => { setAlboom(album.filter(img => img._id !== image1._id)); })
            .catch(error => console.log('error', error));
    }

    function updateImage(img) {
        addImage(img);
        history.push("/updateImg");
    }
    return (
        <>
            {
                album.length &&
                album.map((imge, key) => (
                    <div key={key} className="col-2 card">
                        <img src={imge.thumbnailUrl} alt="Avatar"></img>
                        <div className="container">
                            <h6>{imge.title}</h6>
                            <p><button className="btn" onClick={() => deleteImage(imge)}>delete</button></p>
                            <p><button className="btn" onClick={() => updateImage(imge)}>update</button></p>
                        </div>
                    </div>
                )
                )
            }
            <p style={{ textAlign: "center" }}> <button className="btn col-2" > <Link to="/newImage">upload Image</Link></button></p>
        </>
    )
}))