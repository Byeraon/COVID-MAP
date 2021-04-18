import React, { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();

    setData(data);
    setLoading(false);
  }, []);

  return { data, loading };
};

export let Fetch2 = (props) => {
  const { data, loading } = useFetch("https://api.covid19api.com/country/"+props.day+"/status/confirmed?from=2020-02-25T00:00:00Z&to=2021-04-18T00:00:00Z");

  return (
      
    <div>
      {loading ? <div>...loading</div> : <div>{data.Cases}</div>}  
      
    </div>
  );
};