import Button from '../formelements/button/Button';
import TextBox from '../formelements/textbox/TextBox';
import style from './contactform.module.css';

const ContactForm = () => {
    return (
        <div className="row">
            <div className="col-12">
                <form onSubmit={(e) => { e.preventDefault(); }} noValidate>
                    <TextBox inputName="" inputType={"text"} labelName={"Full name"} />
                    <TextBox inputType={"email"} labelName={"Email Address"} />
                    <TextBox inputType={"textarea"} labelName={"Email Address"} />
                   <Button labelName='Submit'/>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;