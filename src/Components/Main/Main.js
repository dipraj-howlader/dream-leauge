import React, { useEffect, useState } from 'react';
import Leauge from '../Leauge/Leauge';
import './Main.css'

const Main = () => {
    const [leauges, setLeauge] = useState([]);
    const sliceLeauges = leauges.slice(4,22);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeauge(data.leagues))
    }, [])

    

    return (
        <div className="main">
            {
                sliceLeauges.map(leauge => <Leauge leauge={leauge}></Leauge> )
            }
        </div>
    );
};

export default Main;