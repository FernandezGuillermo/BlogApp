import React, { useContext } from "react";
import { Link,NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const NavBar = () => {

    const{ currentUser } = useContext(AuthContext);

    return (
        <div className="NavBar">
            <div className="container">
                <div className="logo">Logo</div>
                <div className="links">
                    <Link className="link" to="/?cat=anime">Anime</Link>
                    <Link className="link" to="/?cat=movies">Movies</Link>
                    <Link className="link" to="/?cat=series">Series</Link>
                    <span>{currentUser?.username}</span>
                    {currentUser ? <span>Logout</span> : <Link className="link" to="/login">Login</Link>}
                    <span onClick={logout}>Logout</span>
                    <span className="write">
                        <Link clasName="link" to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;