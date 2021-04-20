import React, { useState, useEffect } from "react";
import f from './fetchinfo.module.css';




export let Fetch2 = (props) => {



  const useFetch = url => {
    const [data, setData] = useState(0);
    const [loading, setLoading] = useState(true);




    // Similar to componentDidMount and componentDidUpdate:
    useEffect(async () => {

      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setLoading(false);

    }, [url]);

    return { data, loading };
  };

  var { data, loading } = useFetch(props.day);
  console.log(props.day);
  
  return (

    <div>
      {(loading) ? <div>...loading</div> : 
      <div className={f.InfoDate}>
      <div className={f.FetchInfo} >CONFIRMED: {data.reduce(function(sum, current) {return sum + current.Confirmed}, 0)}</div> 
      <div className={f.FetchInfo} >DEATHS: {data.reduce(function(sum, current) {return sum + current.Deaths}, 0)}</div>
      <div className={f.FetchInfo} >RECOVERED: {data.reduce(function(sum, current) {return sum + current.Recovered}, 0)}</div> 
      <div className={f.FetchInfo} >ACTIVE: {data.reduce(function(sum, current) {return sum + current.Active}, 0)}</div>
      </div>}

    </div>
  );
};