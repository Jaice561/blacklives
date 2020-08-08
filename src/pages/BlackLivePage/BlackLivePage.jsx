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
                    handleDeleteLive={props.handleDeleteLive}
                    />
                   
                     </>
                )}
        </div>
        </div>
        </>
    )
}

export default BlackLivePage;