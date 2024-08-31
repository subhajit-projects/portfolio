
import styles from './skills.module.css';

const Skills = () => {
    return (
        <div className={styles.skills_div}>
            <img src={window.location.origin+"/assets/images/python.png"} alt="skill-logo" />
            <span className={`${styles.rating} mt-1`}>
                <img src={window.location.origin+"/assets/images/full_star.png"} alt="rating" />
                <img src={window.location.origin+"/assets/images/full_star.png"} alt="rating" />
                <img src={window.location.origin+"/assets/images/full_star.png"} alt="rating" />
                <img src={window.location.origin+"/assets/images/half_star.png"} alt="rating" />
                <img src={window.location.origin+"/assets/images/star.png"} alt="rating" />
            </span>
        </div>
    )
}

export default Skills;