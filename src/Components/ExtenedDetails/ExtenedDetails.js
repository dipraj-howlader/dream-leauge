import React from 'react';
import './ExtenedDetails.css';
import found from '../../Icon/found 1.png';
import flag from '../../Icon/flag (1) 1.png';
import football from '../../Icon/football (1) 1.png';
import gender from '../../Icon/male-gender-sign 1.png';
import male from '../Photo/male.png';
import female from '../Photo/female.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF); 

const ExtenedDetails = (props) => {
    const { intFormedYear, strBadge, strCountry, strFacebook, strGender, strLeague, strTwitter, strYoutube, strDescriptionEN, strDescriptionES, strSport } = props.leauge;


    let setGender = male;
    const genderMatch = () => {
        if (strGender.toLowerCase() === 'Male'.toLowerCase()) {
            setGender = male;
        }
        else {
            setGender = female;
        }
        return setGender;
    }

    return (
        <div>

            <div className="details-bg">
                <img src={strBadge} alt="" />
            </div>

            <div className="extenedStyle">
                <div className="cardStyle">
                    <div>
                        <h2>{strLeague}</h2>
                        <p><img src={found} alt="" />  Founded : {intFormedYear}</p>
                        <p> <img src={flag} alt="" />  Country : {strCountry}</p>
                        <p><img src={football} alt="" />  Sports Type : {strSport}</p>
                        <p><img src={gender} alt="" />  Gender : {strGender}</p>
                    </div>
                    <div className="genderImg">

                        <img src={genderMatch()} alt="" />

                    </div>
                </div>
        
                <div>
                    <p>{strDescriptionEN}</p>
                    <br />
                    <br />
                    <br />
                    <p>{strDescriptionES}</p>
                    <div className="social-icon">
                        <a href={`https://${strFacebook}`} ><FontAwesomeIcon icon={faFacebook} size="2x" /> </a>
                        <a href={`https://${strTwitter}`} ><FontAwesomeIcon icon={faTwitter}  size="2x"/> </a>
                        <a href={`https://${strYoutube}`} > <FontAwesomeIcon icon={faYoutube}  size="2x"/> </a>
                    </div>

                </div>
                <footer style={{textAlign:'center'}}>
                 <p><small>Developed by : Dipraj Howlader</small></p>
                 </footer>
            </div>
            
        </div>
    );
};

export default ExtenedDetails;