import React, { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data;

    setData(data);
    setLoading(false);
  }, []);

  return { data, loading };
};

export let Fetch = (props) => {
  const { data, loading } = useFetch("https://api.covid19api.com/dayone/country/CH/status/confirmed");
  return (
      
    <div>
      {loading ? <div>...loading</div> : <div>{data[props.i].Date}</div>}  
      
    </div>
  );
};