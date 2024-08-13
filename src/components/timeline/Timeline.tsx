
import styles from './timeline.module.css';

const Timeline = () => {
    return(
        <ul className={styles.timeline}>
            <li className={`${styles.timeline_item}`}>
                <div className={styles.timeline_arrow}></div>
                <div><span className={styles.year}>2024 - Present</span></div>
                <div className='pt-2'><span className={styles.possition}>Project Enigneer</span></div>
                <div><span className={styles.company}>CDAC</span></div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</div>
                {/* <h2 className="h5 mb-0">Title of section 1</h2><span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>21 March, 2019</span>
                <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p> */}
            </li>
            <li className={`${styles.timeline_item}`}>
                <div className={styles.timeline_arrow}></div>
                <div><span className={styles.year}>2024 - Present</span></div>
                <div className='pt-2'><span className={styles.possition}>Project Enigneer</span></div>
                <div><span className={styles.company}>CDAC</span></div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</div>
            </li>
        </ul>
    )
}

export default Timeline;