import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ExtenedDetails from '../ExtenedDetails/ExtenedDetails';
import './LeaugeDetails.css'

const LeaugeDetails = () => {
  const {idLeague} =  useParams();
  const [leauges, setLeauge] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
    fetch(url)
    .then(res => res.json())
    .then(data => setLeauge(data.leagues))
}, []);


    return (
        <div>
            {
                leauges.map(leauge => <ExtenedDetails leauge={leauge}></ExtenedDetails>)
            }
        </div>
    );
};

export default LeaugeDetails;