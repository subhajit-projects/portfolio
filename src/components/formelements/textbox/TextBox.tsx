
import { HTMLInputTypeAttribute } from 'react';
import styles from './textbox.module.css';

interface formProps {
    inputType: HTMLInputTypeAttribute,
    inputName?: String,
    labelName: String
}

const TextBox = (props:formProps) => {
    return (
        <div className={`${styles.field} m-2`}>
            {
                (props.inputType === 'textarea') ?
                    <>
                        <textarea className={styles.input} required></textarea>
                        <label className={styles.label}>{props.labelName}</label>
                        <small className={styles.error}>Error Message</small>
                    </>
                :
                    <>
                        <input type={props.inputType} className={styles.input} required />
                        <label className={styles.label}>{props.labelName}</label>
                        <small className={styles.error}>Error Message</small>
                    </>
            }
        </div>
    )
}

export default TextBox;