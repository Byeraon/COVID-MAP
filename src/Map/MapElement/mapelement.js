import s from './mapelement.module.css'



export let MapElement = (props) => {
    return (<path fill="white" onClick={props.CrossClick(props.class)}  d={props.d}></path>);
}