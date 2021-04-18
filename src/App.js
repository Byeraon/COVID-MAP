import s from './App.module.css';
import { Map } from './Map/map'
import { Timeline } from './Timeline/timeline';

export let App = () => {

  

  return (
    <div className={s.App}>
      <div className={s.Top}>
        <Map></Map>
      </div>
      <Timeline></Timeline>
    </div>
  );
}
