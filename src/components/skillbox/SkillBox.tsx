
import styles from './skills.module.css';

interface skillprops {
    skillIconName: String,
    skillRating: number,
    uniqueKey: number
}

const SkillBox = (props: skillprops) => {
    let rating_calculate = props.skillRating/2
    let rating_star = Array();
    for (let index = 0; index < Math.trunc(props.skillRating/2); index++) {
        rating_star.push(<img src={window.location.origin+"/assets/images/full_star.png"} alt="rating" />);        
    }
    if(!Number.isInteger(rating_calculate)) {
        rating_star.push(<img src={window.location.origin+"/assets/images/half_star.png"} alt="rating" />);
    }
    for (let index = Math.ceil(rating_calculate); index < 5; index++) {
        rating_star.push(<img src={window.location.origin+"/assets/images/star.png"} alt="rating" />);        
    }
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
                {/* <img src={window.location.origin+"/assets/images/full_star.png"} alt="rating" />
                <img src={window.location.origin+"/assets/images/full_star.png"} alt="rating" />
                <img src={window.location.origin+"/assets/images/full_star.png"} alt="rating" />
                <img src={window.location.origin+"/assets/images/half_star.png"} alt="rating" />
                <img src={window.location.origin+"/assets/images/star.png"} alt="rating" /> */}
                {
                    rating_star.map((data, key) => (
                        data
                    ))
                }
            </span>
        </div>
    )
}

export default SkillBox;