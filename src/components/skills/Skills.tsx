
import styles from './skills.module.css';

const Skills = () => {
    return (
        <div className={styles.skills_div}>
            <img src={window.location.origin+"/assets/images/python.png"} />
            <span className={`${styles.rating} mt-1`}>
                <img src={window.location.origin+"/assets/images/full_star.png"} />
                <img src={window.location.origin+"/assets/images/full_star.png"} />
                <img src={window.location.origin+"/assets/images/full_star.png"} />
                <img src={window.location.origin+"/assets/images/half_star.png"} />
                <img src={window.location.origin+"/assets/images/star.png"} />
            </span>
        </div>
    )
}

export default Skills;