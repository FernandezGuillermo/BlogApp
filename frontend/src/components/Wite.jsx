import React from "react";
import { Link,NavLink } from "react-router-dom";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value,setValue] = useState('');
    
    return (
        <div className="write">
            <div className="content">
                <input type="text" placeholder="Title"/>
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue}/>
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b>Draft
                    </span>
                    <span>
                        <b>Visibility: </b>Public
                    </span>
                    <input style={{display:"none"}} type="file" id="file" name=""/>
                    <label className="file" htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button>Update </button>
                    </div>
                </div>
                    <div className="item">
                        <h1>Category</h1>
                        <div className="cat">
                            <input type="radio" name="cat" value="anime" id="anime"/>
                            <label htmlFor="anime">Anime</label>
                        </div>
                        <div className="cat">
                            <input type="radio" name="cat" value="movies" id="movies"/>
                            <label htmlFor="anime">Movies</label>
                        </div>
                        <div className="cat">
                            <input type="radio" name="cat" value="serie" id="serie"/>
                            <label htmlFor="anime">Series</label>
                        </div>
                    </div> 
            </div>
        </div>
    )
}

export default Write;