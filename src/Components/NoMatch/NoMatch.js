import React from 'react';
import photo from '../Photo/Not found img.jpg';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div className="no-match">
            <img src={photo} alt=""/>
        </div>
    );
};

export default NoMatch;