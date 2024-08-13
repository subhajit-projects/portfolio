import ContactDetails from "../../components/contactdetails/ContactDetails";
import ContactForm from "../../components/contactform/ContactForm";

const Contact = () => {
    return (
        <div className="row">
            <div className="col-12 col-md-6">
                {/* <div className="row">
                    <div className="col-4">Address: </div>
                    <div className="col-8">West Bangal, India </div>
                </div>
                <div className="row">
                    <div className="col-4">Phone: </div>
                    <div className="col-8">West Bangal, India </div>
                </div>
                <div className="row">
                    <div className="col-4">Address: </div>
                    <div className="col-8">West Bangal, India </div>
                </div>
                <div className="row">
                    <div className="col-4">Address: </div>
                    <div className="col-8">West Bangal, India </div>
                </div> */}
                <ContactDetails />
            </div>
            <div className="col-12 col-md-6">
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;