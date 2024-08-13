
import styles from './projectcard.module.css';

const ProjectCard = () => {
    return (
        <div className="row">
            <div className="col-6 mt-4">
                <div className={styles.card}>
                    <div className={styles.card_contain}>
                        <div className={styles.image}>Image</div>
                        <div className={styles.content}>
                            <div className="row">
                                <div className="col-9">
                                    <h2>Project Name</h2>
                                </div>
                                <div className="col-3 d-flex justify-content-center align-items-center">
                                    <img src={window.location.origin+"/assets/images/maximize.png"} alt="redirect" className={styles.redirect_arrow} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="col-6 mt-4">
                <div className={styles.card}>
                    <div className={styles.card_contain}>
                        <div className={styles.image}>Image</div>
                        <div className={styles.content}>
                            <div className="row">
                                <div className="col-9">
                                    <h2>Project Name</h2>
                                </div>
                                <div className="col-3">
                                    arrow
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="col-6 mt-4">
                <div className={styles.card}>
                    <div className={styles.card_contain}>
                        <div className={styles.image}>Image</div>
                        <div className={styles.content}>
                            <div className="row">
                                <div className="col-9">
                                    <h2>Project Name</h2>
                                </div>
                                <div className="col-3">
                                    arrow
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default ProjectCard;