
import styles from './skills.module.css';

interface skillprops {
    skillIconName: String,
    skillRating: number,
    uniqueKey: number
}

const SkillBox = (props: skillprops) => {
    return (
        <div key={props.uniqueKey} className={styles.skills_div}>
            {/* <img src={window.location.origin+"/assets/images/skills/python.png"} alt="skill-logo" /> */}
            <img 
                src={window.location.origin+"/assets/images/skills/"+props.skillIconName}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = window.location.origin+"/assets/images/error_image.png"
                }} 
                alt="skill-logo" />
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

export default SkillBox;