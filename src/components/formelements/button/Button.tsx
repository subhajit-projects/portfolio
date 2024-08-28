
import style from './button.module.css';

interface buttonProps {
    buttonType?: undefined,
    buttonName?: string,
    labelName: string
}

const Button = (props : buttonProps) => {
    return (
        <button className={`${style.btn} m-2`} type={props.buttonType} name={props.buttonName}>
            <label>{props.labelName}</label>
        </button>
    )
}

export default Button;