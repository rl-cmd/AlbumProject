import React, { useEffect, useState } from 'react'
import { FcLike } from "react-icons/fc";
import './Login/login.css'
import { connect } from "react-redux";
import './images.css'

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    }
}
export default connect(mapStateToProps)(function Images(props) {
    const { user } = props;

    const [album, setAlboom] = useState([])

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(json => { console.log(json); setAlboom(json) })
        }, [])
    function like(img) {
        img["user_id"] = user.id
        console.log(img);
        fetch('http://localhost:5000/Images/createImage',
            {
                method: 'POST',
                body: JSON.stringify(
                    img
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

    }
    return (
        <>



            {  album.map((imge, key) => (
                <div key={key} className="col-2 card">
                    <img src={imge.thumbnailUrl} alt="Avatar"></img>
                    <div className="container">
                        <h6>{imge.title}</h6>
                        <p><button className="btn btn2" onClick={() => like(imge)}><FcLike /></button></p>
                    </div>
                </div>
            )
            )
            }

        </>
    )
})

