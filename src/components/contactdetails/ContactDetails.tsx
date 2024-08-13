
import styles from './contactdetails.module.css';

const ContactDetails = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <span className={styles.heading}>Address:</span>
                </div>
                <div className="col-12">
                    Tollygunge, Koltata, INDIA
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <span className={styles.heading}>Say hello on:</span>
                </div>
                <div className="col-12">
                    +91 XXXX-XX-XXXX
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <span className={styles.heading}>Write a message on:</span>
                </div>
                <div className="col-12">
                    XXXX@XXXX.XXXX
                </div>
            </div>
        </>
    )
}

export default ContactDetails;