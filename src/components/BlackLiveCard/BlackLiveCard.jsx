import React from 'react';

function BlackLiveCard({ blacklive, handleDeleteLive }) {
    return(
        <>
            <div className="col s12 m7">
                <h2 className="header">Horizontal Card</h2>
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
                        </div>

                    </div>
                </div>
            </div>
            <div class="row">    
            <form class="col s12">      
            <div class="row">        
            <div class="input-field col s12">          
            <textarea id="textarea1" class="materialize-textarea"></textarea>          
            <label for="textarea1">Comments</label>        
            </div>      
            </div> 
            <button type="submit" className="btn green">Post</button>  
             </form>
             </div>
        </>
    )
}
        
export default BlackLiveCard;