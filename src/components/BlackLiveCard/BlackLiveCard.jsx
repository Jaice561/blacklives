import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import './BlackLiveCard.css'

function BlackLiveCard({ blacklive, handleDeleteLive,comments,handleAddComment,handleDeleteComment }) {
      // const [invalidForm,setInvalidForm] = useState(false)
        const [formData,setFormData] = useState({
        'commentname':'',
        'postedby':blacklive.name
    })
    const formRef = React.useRef();
const handleSubmit = e => {
        e.preventDefault();
        handleAddComment(formData)
        formData.commentname=''
    };

const handleChange = e => {

    setFormData({...formData, [e.target.name]: e.target.value})
  //  setInvalidForm(!formRef.current.checkValidity())
    console.log(formData)
    };

    return(
        <>
            <div className="container">
                <div className="child leftdiv">
                <div className="card horizontal">
                    <div className="card-image">
                        <img  alt="blacklive" className="activator" src={blacklive.image ? blacklive.image : "https://lorempixel.com/100/190/nature/6"} onClick={()=> {}} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h1>Name: {blacklive.name}</h1>
                            <h2>Date: {blacklive.date}</h2>
                            <h2>Occupation: {blacklive.occupation}</h2>
                            <p>How my life matter this week: {blacklive.msg}</p>
                        </div>

                        <div className="card-action">
                            {/* <a href="/">This is a link</a> */}
                            <button type="submit" className="btn red" onClick={() => handleDeleteLive(blacklive._id)}>
                    <i className="material-icons left">delete</i>
                        Delete 
                    </button>
                            <Link
                         className="btn yellow black-text"
                         to={{
                             pathname: '/edit',
                             state: {blacklive}
                            }}
                            ><i className="material-icons left">edit</i>
                         Edit
                     </Link>
                        </div>

                    </div>
                </div>
            </div>
                <div className="child rightdiv">
                    {comments.map(comment =>
                            <>
                                 <button type="submit" className="btn red" onClick={() => handleDeleteComment(comment._id)}>
                        X
                    </button>
                            <span className="commentspan">{comment.commentname}</span>

                                <br></br>
                            </>
                        )}

            <div class="row">
            <form class="col s12" onSubmit={handleSubmit} >
            <div class="row">
            <div class="input-field col s12">
            <textarea name="commentname" id="commentname" class="materialize-textarea"
                      value={formData.commentname} onChange={handleChange}></textarea>
                <label htmlFor="commentname">Comments</label>

            </div>
            </div>
            <button type="submit" className="btn green">Post</button>
             </form>
             </div>
                     </div>
            </div>
        </>
    )
}
        
export default BlackLiveCard;