import s from './partelement.module.css';

export let PartEl = (props) => {

    
    

    return(
        <div onClick={props.thego(props.time)} className={s.part_el}></div>
    )
}