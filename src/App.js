import { useState } from 'react/cjs/react.development';
import s from './App.module.css';
import { Map } from './Map/map'
import { Timeline } from './Timeline/timeline';

export let App = () => {


  const [timeline, setTimeline] = useState('2020-02-25T00:00:00Z');

  let GiveTime = (value) => {
    setTimeline(value);
    
}
  

  return (
    <div className={s.App}>
      <div className={s.Top}>
        <Map givetime={timeline}></Map>
      </div>
      <Timeline givetime={GiveTime}></Timeline>
    </div>
  );
}
