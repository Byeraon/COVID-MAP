import React, { useState, useEffect } from "react";

const useFetch = (url) => {
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
    // const [ur, setUr] = useState(props.day);
    
  
      let { data, loading } = useFetch(props.day);
      
//   setUr(prev => {return prev});
  return (
      
    <div>
      {(loading) ? <div>...loading</div> :  <div>{data[200].Cases}</div>  }  
      
    </div>
  );
};