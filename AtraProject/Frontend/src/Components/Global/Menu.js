import React from "react";
import {
    Link,
} from 'react-router-dom'
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import './menu.css'
export default function Menu(props) {
    return (
        <>
            <nav style={{ backgroundColor: "rgb(253, 239, 252)" }} className="navbar navbar-expand-lg navbar-light bg-ligh sticky-top">
                <button className="btn btn-outline btn-lg col BB">
                    <Link to="/album" className="nav-link nl"><AiOutlinePicture /> album</Link>
                </button>
                <button className="btn btn-outline btn-lg col BB">
                    <Link to="/myHistory" className="nav-link nl"><AiOutlineHeart /> myHistory</Link>
                </button>

            </nav >

        </>
    )
}
