import { Line } from './Line/line';
import s from './timeline.module.css';
import { Fetch } from '../script';
import { useEffect, useState } from 'react';

export let Timeline = () => {

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

    const [index, setCounter] = useState(0)

    let updateData = (value) => {
        var f = 0;
        this.setState(f = value);
        console.log(f);
    }
    var len;
    function CountDays() {
        const { data, loading } = useFetch("https://api.covid19api.com/dayone/country/CH/status/confirmed");
         len = data.length;
         console.log(len);
        return (
      
            <div>      </div>
            
          ); }
     
         
    let GoTimeLine = () => {
        if (index != len-1) {
            setCounter(index + 1);
        }

    }
    return (
        <div className={s.backTimeLine}>
            <Line GoTimeLine={GoTimeLine}></Line>
            <Fetch i={index} ></Fetch>
            <CountDays updateData={updateData}></CountDays>
        </div>
    )
}
