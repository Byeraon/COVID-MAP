import s from './line.module.css';

export let Line = (props) => {
    return (
        <div>
            <div className={s.line}>

            </div>
            <div onClick={props.GoTimeLine}  className={s.play}><svg class={s.circle_fill}>
                <circle  fill="none" cx="41" cy="41" r="31" stroke="#fff" stroke-width="1"></circle>
                <polygon fill="none" stroke="#fff" stroke-width="1" points="32,25 32,58 60,42"></polygon>
            </svg>
            </div>
        </div>
    )
}