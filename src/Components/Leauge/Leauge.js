import React, { useEffect, useState } from 'react';
import './Leauge.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Leauge = (props) => {
    const { strLeague, idLeague } = props.leauge;
    // console.log(props);
    const [leauge, setLeauge] = useState([])


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeauge(data.leagues))
    }, [idLeague]);

    console.log(leauge);
    return (
        <div className="leauge">
            {
                leauge.map(photo => ( <img src={photo.strBadge} alt="" />))
            }
            <h2>{strLeague}</h2>
            {
                leauge.map(sptype => <p>Sports type: {sptype.strSport}</p> )
            }
            
            <Link style={{ textDecoration: 'none' }} to={`/league/${idLeague}`}> <Button variant="contained" color="primary">
                Explore <FontAwesomeIcon icon={faArrowRight} />
            </Button></Link>
        </div>
    );
};

export default Leauge;