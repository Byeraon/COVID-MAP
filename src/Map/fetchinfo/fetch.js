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
  const [sum, setSum] = useState(0);

  useEffect(() => {
    
    setSum(0);
    for (let i = 0; i < data.length; i++) {
      setSum(data[i].Confirmed + sum);
      console.log('kek');
    }

  }, [data]);
  debugger;
  return (

    <div>
      {(loading) ? <div>...loading</div> : <div className={f.FetchInfo} >CONFIRMED: {sum}</div>}

    </div>
  );
};