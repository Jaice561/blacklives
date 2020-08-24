import React from 'react';
import BlackLiveCard from '../../components/BlackLiveCard/BlackLiveCard';

function BlackLivePage(props) {
    return (
        <>
       <div className="fullPage">
        <div className='BlackLivePage-grid'>
            {props.blacklives.map(blacklive => 
            <>
                <BlackLiveCard
                    key={blacklive._id}
                    blacklive={blacklive}
                    comments={props.comments.filter(comment => (comment.blackliveid === blacklive._id))}
                    handleDeleteLive={props.handleDeleteLive}
                    handleAddComment={props.handleAddComment}
                    handleDeleteComment={props.handleDeleteComment}
                    />
                   
                     </>
                )}
        </div>
        </div>
        </>
    )
}

export default BlackLivePage;