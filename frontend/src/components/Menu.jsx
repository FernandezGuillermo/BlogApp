import React from "react";
import { Link,NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <h1>Other posts you may like </h1>
            {postMessage.map((post)=>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt=""/>
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu;