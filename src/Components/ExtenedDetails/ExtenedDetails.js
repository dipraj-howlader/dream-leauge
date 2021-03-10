import React from 'react';
import './ExtenedDetails.css';

const ExtenedDetails = (props) => {
    const {intFormedYear, strBadge,strCountry,strFacebook,strGender, strLeague,strTwitter,strYoutube ,strDescriptionEN,strDescriptionES} = props.leauge;
    console.log(props.leauge);
    return (
        <div>

            <div className="details-bg">
                <img src={strBadge} alt=""/>
            </div>

            <div className="extenedStyle">
                <div  className="cardStyle">
                <div>
                <h3>{strLeague}</h3>
                <p>Founded : {intFormedYear}</p>
                <p>Country : {strCountry}</p>
                <p>Sports Type : Football</p>
                <p>Gender : {strGender}</p>
                </div>
                <div>

                </div>
                </div>

                <div>
                <p>{strDescriptionEN}</p>
                <br/>
                <br/>
                <br/>
                <p>{strDescriptionES}</p>
                </div>
            
            </div>

        </div>
    );
};

export default ExtenedDetails;